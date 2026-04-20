import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.users);

  return (
    <section className="flex min-h-[calc(100vh-140px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl rounded-4xl border border-white/40 bg-white/40 p-8 shadow-xl backdrop-blur-md md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            {!isAuthenticated ? (
              <>
                <p className="mb-4 inline-flex rounded-full border border-amber-300/50 bg-amber-100/70 px-4 py-1 text-sm font-medium tracking-wide text-amber-700">
                  はじめるにはログインが必要です
                </p>

                <h1 className="mb-5 text-4xl font-bold leading-tight text-[#27374D] md:text-5xl">
                  タスク管理を
                  <span className="block text-[#526D82]">
                    もっとスマートに始めよう
                  </span>
                </h1>

                <p className="mb-8 max-w-xl text-base leading-7 text-[#526D82] md:text-lg">
                  ログインすると、タスクの作成・編集・進捗管理ができます。
                  あなた専用のToDoスペースを今すぐ始めましょう。
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate("/login")}
                    className="rounded-2xl bg-[#27374D] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-xl active:scale-95"
                  >
                    ログインする
                  </button>

                  <button
                    onClick={() => navigate("/register")}
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
                  タスク管理を
                  <span className="block text-[#526D82]">
                    もっと分かりやすく、もっと快適に
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

          {/* Right */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#9DB2BF]/30 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#526D82]/20 blur-2xl"></div>

            <div className="rounded-[28px] border border-[#9DB2BF]/30 bg-[#F8FBFD]/80 p-6 shadow-lg">
              {!isAuthenticated ? (
                <>
                  <h2 className="mb-5 text-lg font-semibold text-[#27374D]">
                    ログインするとできること
                  </h2>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      ✍️ タスクの追加・編集
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      📌 優先順位の設定
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      ✅ 完了タスクの管理
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      📈 あなた専用の進捗管理
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 relative rounded-2xl border border-[#9DB2BF]/30 bg-[#F8FBFD]/80 p-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-semibold text-[#27374D]">
                        今日のタスク
                      </h2>

                      <span className="rounded-full bg-[#DDE6ED] px-3 py-1 text-[10px] font-semibold text-[#526D82]">
                        Productivity
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#9DB2BF]/20">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-medium text-[#27374D]">
                          タスクUIを整える
                        </p>

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
                        <p className="font-medium text-[#27374D]">
                          Redux連携を仕上げる
                        </p>

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
                        <p className="font-medium text-[#27374D]">
                          ポートフォリオ公開
                        </p>

                        <span className="rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-600 ring-1 ring-rose-500/20">
                          高
                        </span>
                      </div>

                      <p className="text-sm text-[#526D82]">
                        デザインを整えて本番公開する
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-[#DDE6ED]/70 p-4 text-center">
                      <p className="text-2xl font-bold text-[#27374D]">12</p>
                      <p className="text-xs text-[#526D82]">タスク</p>
                    </div>

                    <div className="rounded-2xl bg-[#DDE6ED]/70 p-4 text-center">
                      <p className="text-2xl font-bold text-[#27374D]">5</p>
                      <p className="text-xs text-[#526D82]">完了</p>
                    </div>

                    <div className="rounded-2xl bg-[#DDE6ED]/70 p-4 text-center">
                      <p className="text-2xl font-bold text-[#27374D]">3</p>
                      <p className="text-xs text-[#526D82]">優先</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
