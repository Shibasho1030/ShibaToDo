import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../ui/Loader";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/helpers";
import Error from "../../ui/Error";
import { useEffect, useState } from "react";
import { getTaskApi } from "../../services/apiTasks";

// タスク詳細を表示するUIコンポーネント
function TaskShow() {
  const navigate = useNavigate();
  const idFromParams = useParams().id;
  const { tasks } = useSelector((state) => state.tasks);
  const { isAuthenticated } = useSelector((state) => state.users);
  console.log(idFromParams);
  const taskFromRedux = tasks.find((t) => +t.id === +idFromParams);
  const [task, setTask] = useState(taskFromRedux ?? null);
  if (!isAuthenticated) navigate("/");

  // 再リロードによりReduxが初期化された場合に必要な処理
  useEffect(
    function () {
      async function fetchGetTask() {
        const taskFromApi = await getTaskApi(idFromParams);
        setTask(taskFromApi);
      }
      fetchGetTask();
    },
    [idFromParams],
  );
  // if (!taskFromRedux) return <Loader />;

  if (!task) return <Loader />;

  const { title, description, completed, priority, dueDate } = task;

  // const task = useLoaderData();

  const priorityStyle = {
    low: "bg-sky-500/10 text-sky-600 ring-sky-500/20",
    medium: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
    high: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
  };

  // const categoryStyle = {
  //   study: "bg-indigo-500/10 text-indigo-700 ring-indigo-500/20",
  //   personal: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20",
  //   other: "bg-slate-500/10 text-slate-700 ring-slate-500/20",
  // };

  const isOverdue = dueDate && !completed && new Date(dueDate) < new Date();

  function handleDoubleClick() {
    navigate(`/tasks/${idFromParams}/form`);
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-2xl backdrop-blur-md">
        {/* Header */}
        <div className="border-b border-slate-200/70 bg-gradient-to-r from-[#DDE6ED] via-white to-[#F8FAFC] px-6 py-5 sm:px-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/tasks"
              className="inline-flex items-center rounded-full border border-[#9DB2BF]/50 bg-white/80 px-4 py-2 text-sm font-medium text-[#27374D] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              ← タスク一覧へ
            </Link>

            <Link
              to={`/tasks/${idFromParams}/form`}
              className="inline-flex items-center rounded-full bg-[#27374D] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-lg"
            >
              編集する
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3 ">
              <span
                onDoubleClick={handleDoubleClick}
                className={`cursor-pointer inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                  completed
                    ? "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20"
                    : "bg-[#526D82]/10 text-[#27374D] ring-[#526D82]/20"
                }`}
              >
                {completed ? "完了" : "進行中"}
              </span>

              {isOverdue && (
                <span
                  onDoubleClick={handleDoubleClick}
                  className="cursor-pointer inline-flex rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-500/20"
                >
                  期限切れ
                </span>
              )}
            </div>

            <div>
              <h1
                className="text-2xl font-bold tracking-tight text-[#27374D] sm:text-3xl cursor-pointer"
                onDoubleClick={handleDoubleClick}
              >
                {title}
              </h1>
              <p className="mt-2 text-sm leading-6 text-[#526D82]">
                タスクの詳細情報を確認できます
              </p>
            </div>

            <div className="flex flex-wrap gap-2 ">
              <span
                onDoubleClick={handleDoubleClick}
                className={`cursor-pointer inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                  priority
                    ? priorityStyle[priority]
                    : "bg-slate-400/10 text-slate-600 ring-slate-400/20"
                }`}
              >
                優先度: {priority || "未設定"}
              </span>

              {/* <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                  category
                    ? categoryStyle[category]
                    : "bg-slate-400/10 text-slate-600 ring-slate-400/20"
                }`}
              >
                カテゴリ: {category || "未設定"}
              </span> */}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Description */}
          <div
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm cursor-pointer"
            onDoubleClick={handleDoubleClick}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#526D82]">
              説明
            </p>

            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="whitespace-pre-wrap break-words text-sm leading-7 text-[#27374D] sm:text-base">
                {description || "説明はありません"}
              </p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="space-y-4">
            <div
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm cursor-pointer"
              onDoubleClick={handleDoubleClick}
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#526D82]">
                期限
              </p>
              <p
                className={`text-sm leading-6 ${
                  isOverdue ? "font-semibold text-rose-600" : "text-[#27374D]"
                }`}
              >
                {formatDate(dueDate)}
              </p>
            </div>

            {/* <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#526D82]">
                Created At
              </p>
              <p className="text-sm leading-6 text-[#27374D]">
                {formatDate(createdAt)}
              </p>
            </div> */}

            {/* <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#526D82]">
                Updated At
              </p>
              <p className="text-sm leading-6 text-[#27374D]">
                {formatDate(updatedAt)}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// ParamsとReduxからタスク情報は取得できるためloader関数は不要
// async function loader() {
//   try {
//     const taskFromApi = await getTaskApi(id);
//     console.log(taskFromApi);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

export default TaskShow;
