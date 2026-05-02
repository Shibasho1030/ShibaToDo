import { useDispatch } from "react-redux";
import { deleteTaskApi, updateTaskApi } from "../../services/apiTasks";
import { deleteTask, updateTask } from "./tasksSlice";
import { Link, useNavigate } from "react-router-dom";

// 単一タスクを表示するためのUIコンポーネント
function TaskItem({
  task,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  handleDrop,
  handleDragMouseDown,
}) {
  const { id, title, completed, priority, dueDate } = task;
  const navigate = useNavigate();

  const priorityStyle = {
    low: "bg-sky-500/10 text-sky-600 ring-sky-500/20",
    medium: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    high: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
  };
  const dispatch = useDispatch();

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

  async function handleDeleteTask() {
    try {
      // console.log("confirm start");
      const confirmed = window.confirm("このタスクを本当に削除しますか？");
      if (!confirmed) return;
      await deleteTaskApi(task.id);
      dispatch(deleteTask(task.id));
      navigate("/tasks");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <li
      draggable
      onDragStart={(e, id) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      onDoubleClick={() => navigate(`/tasks/${id}`)}
      onDragOver={(e) => handleDragOver(e)}
      className="mb-0.5 group flex items-center justify-between rounded-3xl border border-white/40 bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
    >
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={handleToggle}
          type="button"
          className={`cursor-pointer flex h-5 min-w-5 items-center justify-center rounded-full border  ${
            completed
              ? "border-[#27374D] bg-[#27374D] text-[#DDE6ED]"
              : "border-stone-300 bg-white text-transparent hover:border-[#526D82]"
          }`}
          aria-label="toggle task"
        >
          ✓
        </button>

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

        <div className="flex items-center gap-1 lg:opacity-0 transition group-hover:opacity-100">
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
            onMouseDown={handleDragMouseDown}
            type="button"
            aria-label="並べ替え"
            name="sort"
            className="cursor-grab rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 active:cursor-grabbing active:scale-95"
          >
            <span className="text-xl leading-none">≡</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
