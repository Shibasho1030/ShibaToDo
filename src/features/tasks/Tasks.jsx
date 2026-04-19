import { useLoaderData } from "react-router-dom";
import { getTasksApi } from "../../services/apiTasks";
import TaskItem from "./TaskItem";
import LinkButton from "../../ui/LinkButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTasks } from "./tasksSlice";
import { useSelector } from "react-redux";

function Tasks() {
  const tasksData = useLoaderData();
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);

  useEffect(
    function () {
      dispatch(setTasks(tasksData));
    },
    [tasksData, dispatch],
  );

  return (
    <>
      <LinkButton className="ml-auto flex items-center gap-2 " to="/tasks/form">
        +
      </LinkButton>

      <div className="mb-2 flex items-center justify-between px-4 text-xs font-semibold uppercase tracking-wide text-[#526D82] ">
        <div className="flex min-w-0 items-center gap-3">
          <span className="w-5"></span>
          <span>Task</span>
        </div>

        <div className="ml-4 flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="inline-block min-w-15 text-center">優先度</span>
          <span className="hidden min-w-10 text-center sm:inline-block">
            カテゴリ
          </span>
          <span className="hidden min-w-15 text-center md:inline-block">
            期限
          </span>
          <span className="min-w-25 text-center">操作</span>
        </div>
      </div>
      <ul>
        {(tasks.length > 0 ? tasks : tasksData).map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const tasksData = await getTasksApi();
  return tasksData;
}

export default Tasks;
