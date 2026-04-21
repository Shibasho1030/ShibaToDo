import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTaskApi } from "../../services/apiTasks";
import Loader from "../../ui/Loader";

// タスク詳細を表示するUIコンポーネント
function TaskShow() {
  const [task, setTask] = useState(null);
  const idFromParams = useParams().id;
  console.log(idFromParams);

  useEffect(
    function () {
      async function fetchGetTask() {
        try {
          const taskFromApi = await getTaskApi(idFromParams);
          console.log(taskFromApi);
          setTask(taskFromApi);
        } catch (err) {
          console.error(err.message);
        }
      }
      fetchGetTask();
    },
    [idFromParams],
  );

  // const task = useLoaderData();

  if (!task) return <Loader />;

  const { id, title, description, completed, priority, dueDate } = task;

  const priorityStyle = {
    low: "bg-sky-500/10 text-sky-700 ring-sky-500/20",
    medium: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
    high: "bg-rose-500/10 text-rose-700 ring-rose-500/20",
  };

  // const categoryStyle = {
  //   study: "bg-indigo-500/10 text-indigo-700 ring-indigo-500/20",
  //   personal: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20",
  //   other: "bg-slate-500/10 text-slate-700 ring-slate-500/20",
  // };

  function formatDate(dateString) {
    if (!dateString) return "未設定";
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  }

  const isOverdue = dueDate && !completed && new Date(dueDate) < new Date();

  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-white/40 bg-white/70 shadow-2xl backdrop-blur-md">
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
              to={`/tasks/form/${id}`}
              className="inline-flex items-center rounded-full bg-[#27374D] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-lg"
            >
              編集する
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                  completed
                    ? "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20"
                    : "bg-[#526D82]/10 text-[#27374D] ring-[#526D82]/20"
                }`}
              >
                {completed ? "完了" : "進行中"}
              </span>

              {isOverdue && (
                <span className="inline-flex rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-500/20">
                  期限切れ
                </span>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#27374D] sm:text-3xl">
                {title}
              </h1>
              <p className="mt-2 text-sm leading-6 text-[#526D82]">
                タスクの詳細情報を確認できます
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${
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
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm">
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
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm">
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

// async function loader() {
//   try {
//     const taskFromApi = await getTaskApi(id);
//     console.log(taskFromApi);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

export default TaskShow;
