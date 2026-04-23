function Overview() {
  const features = [
    {
      title: "タスクの追加・編集・削除",
      body: "基本的なCRUD機能を実装し、タスク管理の流れを一通り体験できる構成にしました。",
    },
    {
      title: "直感的なタスク一覧UI",
      body: "優先度・期限・操作ボタンを一覧で見やすく整理し、ダブルクリックで詳細画面へ遷移できるようにしています。",
    },
    {
      title: "画面の再読み込み対応",
      body: "Reduxの状態が消えても、必要に応じてAPIから再取得して画面を復元できるようにしました。",
    },
    {
      title: "ログイン状態の保持",
      body: "localStorage にユーザーIDを保存し、再アクセス時もログイン状態を維持できます。",
    },
  ];

  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">アプリ概要</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            ログイン後に自分のタスクを確認し、追加・編集・削除・完了管理まで行えるToDoアプリです。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#9DB2BF]/20 bg-[#F8FBFD]/80 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#27374D]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#526D82]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Overview;
