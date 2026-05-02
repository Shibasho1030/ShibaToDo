import { getTasksApi } from "../../services/apiTasks";
import TaskItem from "./TaskItem";
import LinkButton from "../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setTasks } from "./tasksSlice";
import { Navigate } from "react-router-dom";

// タスク一覧を表示するUIコンポーネント
function Tasks() {
  const dispatch = useDispatch();
  const { currentUserId, isAuthenticated } = useSelector(
    (state) => state.users,
  );
  const { tasks } = useSelector((state) => state.tasks);

  const draggedTaskId = useRef(null);
  const canDrag = useRef(false);
  // ドラッグ開始前の元の配列を保存する
  const originalTasksRef = useRef(null);
  // リスト内でdropされたかどうか
  const didDropInsideRef = useRef(false);
  const [draggingId, setDraggingId] = useState(null);

  useEffect(
    function () {
      async function setTasksDataFetch() {
        try {
          const tasksDataFromApi = await getTasksApi();
          dispatch(setTasks(tasksDataFromApi));
        } catch (err) {
          console.error(err.message);
        }
      }

      isAuthenticated && setTasksDataFetch();
    },
    [dispatch, isAuthenticated],
  );

  const filteredTasks = tasks.filter((task) => task.userId === currentUserId);

  if (!isAuthenticated) return <Navigate to="/" replace />;

  function handleDragMouseDown() {
    canDrag.current = true;
  }

  function handleDragStart(e, id) {
    if (!canDrag.current) {
      e.preventDefault();
      return;
    }

    draggedTaskId.current = id;
    didDropInsideRef.current = false;

    // ドラッグ開始時点の元配列を保存しておく
    originalTasksRef.current = tasks;

    setDraggingId(id);
    e.dataTransfer.effectAllowed = "move";
    // Firefox対策
    e.dataTransfer.setData("text/plain", String(id));
  }

  function mergeUserTasks(nextUserTasks) {
    let nextUserTaskIndex = 0;

    return tasks.map((task) => {
      if (task.userId !== currentUserId) return task;

      const nextTask = nextUserTasks[nextUserTaskIndex];
      nextUserTaskIndex++;

      return nextTask;
    });
  }

  function moveDraggedTaskToIndex(insertIndex) {
    const draggedId = draggedTaskId.current;
    if (draggedId === null) return;

    const userTasks = tasks.filter((task) => task.userId === currentUserId);

    const draggedTask = userTasks.find(
      (task) => String(task.id) === String(draggedId),
    );

    if (!draggedTask) return;

    const tasksWithoutDragged = userTasks.filter(
      (task) => String(task.id) !== String(draggedId),
    );

    const safeInsertIndex = Math.max(
      0,
      Math.min(insertIndex, tasksWithoutDragged.length),
    );

    const nextUserTasks = [
      ...tasksWithoutDragged.slice(0, safeInsertIndex),
      draggedTask,
      ...tasksWithoutDragged.slice(safeInsertIndex),
    ];

    const currentOrder = userTasks.map((task) => task.id).join("-");
    const nextOrder = nextUserTasks.map((task) => task.id).join("-");

    // 並び順が変わらない場合はdispatchしない
    if (currentOrder === nextOrder) return;

    const nextTasks = mergeUserTasks(nextUserTasks);
    dispatch(setTasks(nextTasks));
  }

  function handleDragOverTask(e, overTaskId) {
    e.preventDefault();
    e.stopPropagation();

    const draggedId = draggedTaskId.current;
    if (draggedId === null) return;
    if (String(draggedId) === String(overTaskId)) return;

    e.dataTransfer.dropEffect = "move";

    const userTasks = tasks.filter((task) => task.userId === currentUserId);

    const draggedIndex = userTasks.findIndex(
      (task) => String(task.id) === String(draggedId),
    );

    const overIndex = userTasks.findIndex(
      (task) => String(task.id) === String(overTaskId),
    );

    if (draggedIndex === -1 || overIndex === -1) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const middleY = rect.top + rect.height / 2;

    let insertIndex;

    // タスクの上半分にいるなら、そのタスクの前へ
    if (e.clientY < middleY) {
      insertIndex = overIndex;
    }

    // タスクの下半分にいるなら、そのタスクの後ろへ
    else {
      insertIndex = overIndex + 1;
    }

    // ドラッグ中のタスクを一度取り除いてから挿入するため、
    // 下方向に動かす場合はindexを1つ補正する
    if (insertIndex > draggedIndex) {
      insertIndex -= 1;
    }

    moveDraggedTaskToIndex(insertIndex);
  }

  function handleDragOverList(e) {
    e.preventDefault();

    const draggedId = draggedTaskId.current;
    if (draggedId === null) return;

    e.dataTransfer.dropEffect = "move";

    // タスクがない場合は何もしない
    if (filteredTasks.length === 0) return;

    const listRect = e.currentTarget.getBoundingClientRect();

    // リストの下側の空白にドラッグした場合、最後尾へ移動
    if (e.clientY > listRect.bottom - 24) {
      moveDraggedTaskToIndex(filteredTasks.length - 1);
    }

    // リストの上側の空白にドラッグした場合、先頭へ移動
    if (e.clientY < listRect.top + 24) {
      moveDraggedTaskToIndex(0);
    }
  }

  function handleDrop(e) {
    e.preventDefault();

    // リスト内でdropされたので確定
    didDropInsideRef.current = true;

    canDrag.current = false;
    draggedTaskId.current = null;
    setDraggingId(null);
  }

  function handleDragEnd() {
    canDrag.current = false;

    // リスト外でドラッグを終了した場合は元の配列に戻す
    if (!didDropInsideRef.current && originalTasksRef.current) {
      dispatch(setTasks(originalTasksRef.current));
    }

    draggedTaskId.current = null;
    originalTasksRef.current = null;
    didDropInsideRef.current = false;
    setDraggingId(null);
  }

  return (
    <>
      <LinkButton className="ml-auto flex items-center gap-2" to="/tasks/form">
        +
      </LinkButton>

      <div className="mb-2 flex items-center justify-between px-4 text-xs font-semibold uppercase tracking-wide text-[#526D82]">
        <div className="flex min-w-0 items-center gap-3">
          <span className="w-5"></span>
          <span>Task</span>
        </div>

        <div className="ml-4 flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="inline-block min-w-15 text-center">優先度</span>

          <span className="hidden min-w-10 text-center md:inline-block">
            期限
          </span>

          <span className="min-w-27 text-center md:min-w-32">操作</span>
        </div>
      </div>

      <ul
        className="space-y-2"
        onDragOver={handleDragOverList}
        onDrop={handleDrop}
      >
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            draggingId={draggingId}
            handleDragStart={handleDragStart}
            handleDragOverTask={handleDragOverTask}
            handleDragEnd={handleDragEnd}
            handleDragMouseDown={handleDragMouseDown}
          />
        ))}
      </ul>
    </>
  );
}

export default Tasks;
