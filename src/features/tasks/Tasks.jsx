import { useLoaderData } from "react-router-dom";
import { getTasksApi } from "../../services/apiTasks";
import TaskItem from "./TaskItem";
import LinkButton from "../../ui/LinkButton";
import { useSelector } from "react-redux";

function Tasks() {
  const tasksData = useLoaderData();
  // const tasksData = useSelector((state) => state.tasks.tasks);
  console.log(tasksData);

  return (
    <>
      <LinkButton className="ml-auto flex items-center gap-2 " to="/tasks/form">
        +
      </LinkButton>
      <ul>
        {tasksData.map((task) => (
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
