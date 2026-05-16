import { getTasksApi, updateTasksApi } from "../../services/apiTasks";
import TaskItem from "./TaskItem";
import LinkButton from "../../ui/LinkButton";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setTasks } from "./tasksSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import TaskOperations from "./TasksOperations";

// タスク一覧を表示するUIコンポーネント
function Tasks() {
  const didDrop = useRef(false);
  const canDrag = useRef(false);
  const originalTasks = useRef(null);
  const [draggingId, setDraggingId] = useState(null);

  // loaderではコンポーネント内のRedux stateを直接参照しづらいため、ログイン中のuserIdをuseSelectorで取得できるuseEffect内でtasks配列を取得する形に変更
  // const tasksData = useLoaderData();

  const dispatch = useDispatch();
  const { currentUserId, isAuthenticated } = useSelector(
    (state) => state.users,
  );
  const { tasks } = useSelector((state) => state.tasks);

  // タスク一覧呼び出し＆ステートに割り当て
  useEffect(
    function () {
      async function setTasksDataFetch() {
        try {
          // console.log(currentUserId);
          const tasksDataFromApi = await getTasksApi(currentUserId);
          dispatch(setTasks(tasksDataFromApi));
        } catch (err) {
          console.error(err.message);
        }
      }
      // console.log(isAuthenticated, +currentUserId);
      // Nologin時はタスク一覧呼び出し不要
      if (isAuthenticated && currentUserId) setTasksDataFetch();
    },
    [dispatch, isAuthenticated, currentUserId],
  );

  // Api取得の際にユーザーのフィルタリングはしているため不要
  // const filteredTasks = tasks.filter((task) => task.userId === currentUserId);

  if (!isAuthenticated) return <Navigate to="/" replace />;

  function handleDragMouseDown() {
    canDrag.current = true;
  }

  function handleDragStart(e, id) {
    if (!canDrag.current) {
      e.preventDefault();
      return;
    }

    didDrop.current = false;
    originalTasks.current = tasks;
    setDraggingId(id);

    // ドラッグ中にこの操作は移動だとブラウザへ伝える設定
    e.dataTransfer.effectAllowed = "move";
    // Firefox対策
    e.dataTransfer.setData("text/plain", String(id));
  }

  function handleDragOver(e, currentOrder) {
    e.preventDefault();

    if (!draggingId) return;
    const draggingTask = tasks.find((task) => task.id === draggingId);
    if (!draggingTask) return;
    if (draggingTask.order === currentOrder) return;

    // console.log('render');
    // taskを並び替えし、tasksステートを更新
    // const draggedOrder = draggingTask.order;

    // if (order > draggedOrder) {
    const newTasks = tasks.filter((task) => task.id !== draggingId);
    newTasks.splice(currentOrder - 1, 0, draggingTask);
    const reorderedTasks = newTasks.map((task, index) => ({
      ...task,
      order: index + 1,
    }));
    dispatch(setTasks(reorderedTasks));

    // 実装難易度が高いと感じたため、今回は簡略的に並び替え機能を実装
    // const rect = e.currentTarget.getBoundingClientRect();
    // const middleY = rect.top + rect.height / 2;
    // console.log(e.clientX, e.clientY);
    // console.log(rect.top, rect.bottom);
    // console.log(middleY);
    // Taskの上側に触れた時
    // if (middleY > e.clientY) {
    // } else {
    // }
  }

  async function handleDrop(e) {
    e.preventDefault();

    // タスク枠内でタスクを離した場合(UX低下のため削除)
    // didDrop.current = true;

    try {
      //APIでjsonファイルも更新
      await updateTasksApi(tasks);
    } catch (err) {
      console.error(err.message);
      dispatch(setTasks(originalTasks.current));
    }
  }

  async function handleDragEnd() {
    // タスク枠外で離した場合(UX低下のため削除)
    // if (!didDrop.current) {
    //   dispatch(setTasks(originalTasks.current));
    // }

    // reset state
    didDrop.current = false;
    setDraggingId(null);
    originalTasks.current = null;
    canDrag.current = false;
  }

  return (
    <>
      {/* <LinkButton className="ml-auto flex items-center gap-2 " to="/tasks/form">
        +
      </LinkButton> */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <TaskOperations />

        <LinkButton
          className="flex items-center gap-2 self-end sm:self-auto"
          to="/tasks/form"
        >
          +
        </LinkButton>
      </div>

      <div className="mb-2 flex items-center justify-between px-4 text-xs font-semibold uppercase tracking-wide text-[#526D82] ">
        <div className="flex min-w-0 items-center gap-3">
          <span className="w-5"></span>
          <span>タスク</span>
        </div>

        <div className="ml-4 flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="inline-block min-w-15 text-center">優先度</span>

          <span className="hidden min-w-10 text-center md:inline-block ">
            期限
          </span>
          <span className="min-w-31 text-center md:min-w-36">操作</span>
        </div>
      </div>
      <ul>
        {tasks.map((task) => {
          // console.log(task.userId, currentUserId);
          return (
            <TaskItem
              task={task}
              key={task.id}
              draggingId={draggingId}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDragEnd={handleDragEnd}
              handleDrop={handleDrop}
              handleDragMouseDown={handleDragMouseDown}
            />
          );
        })}
      </ul>
    </>
  );
}

// JSONファイル(DB)からタスク一覧を取得するReact Routerローダー関数、トグルボタンの起動によりLoader再実行、
// Reduxのstate初期化によりログアウト状態となるためuseEffectでのtasks配列更新に変更
// export async function loader() {
//   const tasksData = await getTasksApi();
//   return tasksData;
// }

export default Tasks;
