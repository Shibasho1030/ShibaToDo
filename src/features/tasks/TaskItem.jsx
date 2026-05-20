import { useDispatch } from "react-redux";
import { deleteTaskApi, updateTaskApi } from "../../services/apiTasks";
import { createTask, deleteTask, updateTask } from "./tasksSlice";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import store from "../../store";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// 単一タスクを表示するためのUIコンポーネント
function TaskItem({
  task,
  draggingId,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleDragEnd,
  handleDragMouseDown,
}) {
  const fetcher = useFetcher();
  const isUpdating = fetcher.state !== "idle";

  const draggedClassName =
    "opacity-40 scale-[0.98] border-dashed bg-slate-100 shadow-none";
  const { id, title, completed, priority, dueDate, order } = task;
  const navigate = useNavigate();

  const priorityStyle = {
    low: "bg-sky-500/10 text-sky-600 ring-sky-500/20",
    medium: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    high: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
  };
  const dispatch = useDispatch();
  // const queryClient = useQueryClient();

  /* fetcher.Formに改良を行ったため削除
  async function handleToggle(e) {
    e.preventDefault();
    const toggledTask = { ...task, completed: !completed };

    try {
      dispatch(updateTask(toggledTask));
      await updateTaskApi(id, toggledTask);
    } catch (err) {
      dispatch(updateTask(task));
      console.error(err.message);
    }
  }
  */

  /* ReduxとReactQueryの両立はキャッシュとUIとのズレが起きるため難しそう => 削除
  const { isLoading: isUpdating, mutate: toggleTaskMutate } = useMutation({
    mutationFn: async (task) => {
      const toggledTask = {
        ...task,
        completed: !task.completed,
        updatedAt: new Date().toLocalString("ja-JP"),
      };

      await updateTaskApi(task.id, toggledTask);
      return toggledTask;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", task.userId],
      });
    },
  }); */

  async function handleDeleteTask() {
    try {
      // console.log("confirm start");
      const confirmed = window.confirm("このタスクを本当に削除しますか？");
      if (!confirmed) return;

      dispatch(deleteTask(task.id));
      await deleteTaskApi(task.id);
      toast.success("タスクを削除しました");
      navigate("/tasks");
    } catch (err) {
      console.error(err.message);
      dispatch(createTask(task));
      toast.error("タスクの削除に失敗しました");
    }
  }

  return (
    <li
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragOver={(e) => handleDragOver(e, order)}
      onDrop={(e) => handleDrop(e, order)}
      onDragEnd={handleDragEnd}
      onDoubleClick={() => navigate(`/tasks/${id}`)}
      className={`mb-0.5 group flex items-center justify-between rounded-3xl border border-white/40 bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg ${String(id) === String(draggingId) ? draggedClassName : ""}`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <fetcher.Form method="PATCH" action={`/tasks/${id}/toggleTask`}>
          <button
            onDoubleClick={(e) => e.stopPropagation()}
            type="submit"
            disabled={isUpdating}
            className={`cursor-pointer flex h-5 min-w-5 items-center justify-center rounded-full border  ${
              completed
                ? "border-[#27374D] bg-[#27374D] text-[#DDE6ED]"
                : "border-stone-300 bg-white text-transparent hover:border-[#526D82]"
            }`}
            aria-label="toggle task"
          >
            ✓
          </button>
        </fetcher.Form>

        <div className="min-w-0">
          <p
            className={`truncate text-sm font-medium tracking-tight ${
              completed ? "text-[#9DB2BF] line-through" : "text-[#27374D]"
            }`}
          >
            {title}
          </p>
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-2 sm:gap-3">
        <span
          className={`cursor-pointer rounded-full px-2.5 py-1 inline-block text-[11px] font-medium ring-1 ${
            priorityStyle[priority]
          }${priority && completed ? " grayscale opacity-60 line-through" : ""} ${priority ? "" : "opacity-0"}`}
        >
          {priority === "high" && "high"}
          {priority === "medium" && "med"}
          {priority === "low" && "low"}
        </span>

        <span
          className={`hidden text-xs min-w-15 text-stone-500 md:inline-block h-4 ${completed ? " grayscale opacity-60 line-through" : ""}`}
        >
          {dueDate ? new Date(dueDate).toLocaleDateString("ja-JP") : ""}
        </span>

        <div
          className={`flex items-center gap-1 lg:opacity-0 transition ${!draggingId ? "group-hover:opacity-100" : ""}`}
        >
          <Link
            to={`/tasks/${id}/form`}
            className="rounded-lg px-2 py-1 text-xs font-medium text-stone-500 lg:transition 
            hover:bg-stone-100 hover:text-stone-800 cursor-pointer "
          >
            Edit
          </Link>

          <button
            type="button"
            onClick={handleDeleteTask}
            className="rounded-lg px-2 py-1 text-xs font-medium text-rose-500 transition hover:bg-rose-50 hover:text-rose-700 cursor-pointer"
          >
            Delete
          </button>

          <button
            onMouseDown={() => handleDragMouseDown(id)}
            onDoubleClick={(e) => e.stopPropagation()}
            type="button"
            aria-label="並べ替え"
            name="sort"
            className="cursor-grab w-9 h-6  rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 active:cursor-grabbing active:scale-95"
          >
            <span className="text-xl leading-none">≡</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;

// 完了トグルボタン用action関数
export async function action({ params }) {
  const id = params.taskId;
  const task = store
    .getState()
    .tasks.tasks.find((task) => String(task.id) === String(id));

  if (!task) {
    throw new Error("対象のタスクが見つかりません");
  }

  const toggledTask = {
    ...task,
    completed: !task.completed,
    updatedAt: new Date().toLocaleString("ja-JP"),
  };

  try {
    store.dispatch(updateTask(toggledTask));
    await updateTaskApi(id, toggledTask);

    return toggledTask;
  } catch (err) {
    store.dispatch(updateTask(task));
    console.error(err.message);
  }
}
