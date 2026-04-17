import { useLoaderData } from "react-router-dom";
import { getTasks } from "../../services/apiTasks";
import TaskItem from "./TaskItem";

function Tasks() {
  const tasksData = useLoaderData();
  console.log(tasksData);

  return (
    <ul>
      {tasksData.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const tasksData = await getTasks();
  return tasksData;
}

export default Tasks;
