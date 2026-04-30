import { useEffect, useState } from "react";
import { getTasksApi } from "../services/apiTasks";
import { useSelector } from "react-redux";
import HomeTaskItem from "../features/tasks/HomeTaskItem";

function HomeRightLogin() {
  const { tasks } = useSelector((state) => state.tasks);
  const [allTasks, setAllTasks] = useState(tasks ?? null);
  const { currentUserId } = useSelector((state) => state.users);

  // APIでタスク一覧を取得
  useEffect(
    function () {
      if (tasks.length) return;
      async function fetchGetTask() {
        try {
          const tasksFromApi = await getTasksApi();
          // console.log(tasksFromApi);
          setAllTasks(tasksFromApi);
        } catch (err) {
          console.error(err.message);
        }
      }
      fetchGetTask();
    },
    [tasks],
  );

  const filteredTasks = allTasks?.filter(
    (task) => currentUserId === task.userId,
  );
  console.log(allTasks);
  console.log(filteredTasks);

  // 今日のタスクを表示するための処理
  const sortedByDueTasks = filteredTasks
    ?.filter((task) => task.completed !== "true")
    .toSorted((a, b) => {
      const dueTimeA = new Date(a.dueDate).getTime();
      const dueTimeB = new Date(b.dueDate).getTime();
      if (dueTimeA - dueTimeB < 0) return 1;
      if (dueTimeA - dueTimeB > 0) return -1;

      const priorityOrder = {
        low: 1,
        medium: 0,
        high: -1,
      };

      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  // console.log(sortedByDueTasks);

  // 残りタスク数、未完了タスク数、優先タスク数、表示のための処理
  // console.log(allTasks);
  const tasksNum = filteredTasks?.length;
  const uncompletedNum = filteredTasks?.reduce(
    (num, task) => num + !task.completed,
    0,
  );
  const highPriorityNum = filteredTasks?.reduce(
    (num, task) => num + (task.priority === "high"),
    0,
  );

  return (
    <div>
      <div className="mb-4 relative rounded-2xl border border-[#9DB2BF]/30 bg-[#F8FBFD]/80 p-3 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#27374D]">今日のタスク</h2>

          <span className="rounded-full bg-[#DDE6ED] px-3 py-1 text-[10px] font-semibold text-[#526D82]">
            Productivity
          </span>
        </div>
      </div>

      <ul>
        {sortedByDueTasks
          ?.slice(0, Math.min(sortedByDueTasks.length, 3))
          .map((task) => {
            return <HomeTaskItem task={task} key={task.id} />;
          })}
      </ul>
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-[#DDE6ED]/70 p-4 text-center">
          <p className="text-2xl font-bold text-[#27374D] min-h-8">
            {tasksNum || 0}
          </p>
          <p className="text-xs text-[#526D82]">タスク</p>
        </div>

        <div className="rounded-2xl min-w-17 bg-[#DDE6ED]/70 p-4 text-center">
          <p className="text-2xl font-bold text-[#27374D] min-h-8">
            {uncompletedNum || 0}
          </p>
          <p className="text-xs text-[#526D82]">未完了</p>
        </div>

        <div className="rounded-2xl bg-[#DDE6ED]/70 p-4 text-center">
          <p className="text-2xl font-bold text-[#27374D] min-h-8">
            {highPriorityNum || 0}
          </p>
          <p className="text-xs text-[#526D82]">優先</p>
        </div>
      </div>

      {/* 静的UIサンプル */}
      {/* <div className="space-y-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#9DB2BF]/20">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-medium text-[#27374D]">タスクUIを整える</p>

            <span className="rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-600 ring-1 ring-sky-500/20">
              低
            </span>
          </div>

          <p className="text-sm text-[#526D82]">
            モダンで見やすい画面レイアウトを作成する
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#9DB2BF]/20">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-medium text-[#27374D]">Redux連携を仕上げる</p>

            <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 ring-1 ring-amber-500/20">
              中
            </span>
          </div>

          <p className="text-sm text-[#526D82]">
            タスク状態と編集状態をスムーズに同期する
          </p>
        </div>

        <div className=" mb-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#9DB2BF]/20">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-medium text-[#27374D]">ポートフォリオ公開</p>

            <span className="rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-600 ring-1 ring-rose-500/20">
              高
            </span>
          </div>

          <p className="text-sm text-[#526D82]">デザインを整えて本番公開する</p>
        </div>
      </div> */}
    </div>
  );
}

export default HomeRightLogin;
