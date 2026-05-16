import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeLeft() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);

  return (
    <>
      <div>
        {!isAuthenticated ? (
          <>
            <p className="mb-4 inline-flex rounded-full border border-amber-300/50 bg-amber-100/70 px-4 py-1 text-sm font-medium tracking-wide text-amber-700">
              はじめるにはログインが必要です
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-[#27374D] md:text-5xl">
              書き出して
              <span className="block text-[#526D82]">
                今のタスクに集中しよう
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-[#526D82] md:text-lg">
              ログインすると、タスクの作成・編集・進捗管理ができます。
              あなた専用のToDoスペースを今すぐ始めましょう。
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("users/login")}
                className="rounded-2xl bg-[#27374D] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-xl active:scale-95"
              >
                ログインする
              </button>

              <button
                onClick={() => navigate("users/createAccount")}
                className="rounded-2xl border border-[#9DB2BF] bg-white/70 px-6 py-3 text-sm font-semibold text-[#27374D] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#DDE6ED] hover:shadow-md active:scale-95"
              >
                新規登録
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 inline-flex rounded-full border border-[#9DB2BF]/50 bg-[#DDE6ED]/80 px-4 py-1 text-sm font-medium tracking-wide text-[#526D82]">
              毎日をシンプルに整理しよう
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-[#27374D] md:text-5xl">
              書き出して
              <span className="block text-[#526D82]">
                今のタスクに集中しよう
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-[#526D82] md:text-lg">
              タスク一覧の確認や、新しいタスクの追加ができます。
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/tasks")}
                className="rounded-2xl bg-[#27374D] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-xl active:scale-95"
              >
                タスクを見る
              </button>

              <button
                onClick={() => navigate("/tasks/form")}
                className="rounded-2xl border border-[#9DB2BF] bg-white/70 px-6 py-3 text-sm font-semibold text-[#27374D] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#DDE6ED] hover:shadow-md active:scale-95"
              >
                タスク追加
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HomeLeft;
