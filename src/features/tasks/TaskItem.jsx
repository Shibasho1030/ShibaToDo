import { useDispatch } from "react-redux";
import { updateTaskApi } from "../../services/apiTasks";
import { updateTask } from "./tasksSlice";

function TaskItem({ task }) {
  const { id, title, completed, priority, category, dueDate } = task;

  const priorityStyle = {
    low: "bg-sky-500/10 text-sky-600 ring-sky-500/20",
    medium: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    high: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
  };

  const dispatch = useDispatch();

  async function handleToggle(e) {
    e.preventDefault();
    const toggledTask = { ...task, completed: !completed };
    dispatch(updateTask(toggledTask));
    try {
      await updateTaskApi(id, { completed: toggledTask.completed });
    } catch (err) {
      dispatch(updateTask(task));
      console.error(err.message);
    }
  }

  return (
    <li className="mb-0.5 group flex items-center justify-between rounded-3xl border border-white/40 bg-white/70 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg">
      {/* left */}
      <div className="flex min-w-0 items-center gap-3">
        <button
          onClick={handleToggle}
          type="button"
          className={`cursor-pointer flex h-5 min-w-5 items-center justify-center rounded-full border transition ${
            completed
              ? "border-[#27374D] bg-[#27374D] text-[#DDE6ED]"
              : "border-stone-300 bg-white text-transparent hover:border-[#526D82]"
          }`}
          aria-label="toggle task"
        >
          {completed ? "✓" : ""}
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

      {/* right */}
      <div className="ml-4 flex shrink-0 items-center gap-2 sm:gap-3">
        <span
          className={`cursor-pointer rounded-full px-2.5 py-1 inline-block text-[11px] font-medium ring-1 ${
            priorityStyle[priority]
          }${completed ? " grayscale opacity-60 line-through" : ""} ${priority ? "" : "opacity-0"}`}
        >
          {priority ? priority : ""}
        </span>
        <span
          className={`cursor-pointer hidden rounded-full min-w-15 bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-stone-600 sm:inline-block 
            ${completed ? " grayscale opacity-60 line-through" : ""}`}
        >
          {category ? category : ""}
        </span>

        <span
          className={`hidden text-xs min-w-15 text-stone-500 md:inline-block h-4 ${completed ? " grayscale opacity-60 line-through" : ""}`}
        >
          {dueDate ? new Date(dueDate).toLocaleDateString("ja-JP") : ""}
        </span>

        <div className="flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-xs font-medium text-stone-500 lg:transition lg:hover:bg-stone-100 lg:hover:text-stone-800 cursor-pointer"
          >
            Edit
          </button>
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-xs font-medium text-rose-500 transition hover:bg-rose-50 hover:text-rose-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
