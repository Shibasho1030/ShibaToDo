function Structure() {
  const structure = [
    {
      name: "App / AppLayout",
      detail: "アプリ全体のルーティングと共通レイアウトを管理",
    },
    {
      name: "Home",
      detail: "ログイン状態に応じて案内表示を切り替えるトップ画面",
    },
    {
      name: "Tasks / TaskItem / TaskShow / TaskForm",
      detail: "一覧・単体表示・編集フォームを役割ごとに分割",
    },
    {
      name: "apiTasks / apiUsers",
      detail: "json-serverとの通信処理をUIから分離",
    },
    {
      name: "store / tasksSlice / accountsSlice",
      detail: "タスク状態と認証状態を分けて状態を管理",
    },
  ];

  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">構成のポイント</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            コンポーネント、状態管理、通信処理を分けて管理しやすい構成を意識しました。
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-[#9DB2BF]/20">
            {structure.map((item) => (
              <div
                key={item.name}
                className="grid gap-2 px-5 py-4 md:grid-cols-[220px_1fr] md:gap-4"
              >
                <p className="font-semibold text-[#27374D]">{item.name}</p>
                <p className="text-sm leading-7 text-[#526D82]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Structure;
