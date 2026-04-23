import { useNavigate } from "react-router-dom";

function HomeTaskItem({ task }) {
  const navigate = useNavigate();
  // console.log(task);
  const { id, title, description, priority } = task;

  const priorityStyle = {
    low: "bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/20",
    medium: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    high: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
  };

  function handleDoubleClick() {
    navigate(`/tasks/${id}`);
  }

  return (
    <li>
      <div
        onDoubleClick={handleDoubleClick}
        className="rounded-2xl mb-4 bg-white p-4 shadow-sm ring-1 ring-[#9DB2BF]/20 cursor-pointer"
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="font-medium text-[#27374D]">
            {title.length > 10 ? `${title.slice(0, 9)}...` : title}
          </p>

          <span
            className={`rounded-full  px-2.5 py-1 text-xs font-medium ${priorityStyle[priority]}`}
          >
            {priority === "high" && "high"}
            {priority === "medium" && "med"}
            {priority === "low" && "low"}
          </span>
        </div>

        <p className="text-sm text-[#526D82]">
          {description.length > 16
            ? `${description.slice(0, 15)}...`
            : description}
        </p>
      </div>
    </li>
  );
}

export default HomeTaskItem;
