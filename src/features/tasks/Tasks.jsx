import { getTasksApi } from "../../services/apiTasks";
import TaskItem from "./TaskItem";
import LinkButton from "../../ui/LinkButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTasks } from "./tasksSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// タスク一覧を表示するUIコンポーネント
function Tasks() {
  // const tasksData = useLoaderData();
  const dispatch = useDispatch();
  const { currentUserId, isAuthenticated } = useSelector(
    (state) => state.users,
  );
  const { tasks } = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  if (!isAuthenticated) navigate("/");

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
      setTasksDataFetch();
    },
    [dispatch],
  );
  const filteredTasks = tasks.filter((task) => task.userId === +currentUserId);

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
          {/* <span className="hidden min-w-10 text-center sm:inline-block">
            カテゴリ
          </span> */}
          <span className="hidden min-w-11 text-center md:inline-block ">
            期限
          </span>
          <span className="min-w-21 text-center md:min-w-25">操作</span>
        </div>
      </div>
      <ul>
        {filteredTasks.map((task) => {
          // console.log(task.userId, currentUserId);
          return <TaskItem task={task} key={task.id} />;
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
