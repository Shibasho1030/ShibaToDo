function History() {
  const histories = [
    {
      date: "2026.04.25",
      title: "初版作成",
      description:
        "タスク管理アプリの初版を作成。タスク一覧の表示、既存タスクの編集、基本的なUI、タスクデータの管理を実装しました。",
    },
    {
      date: "2026.05.03",
      title: "タスク並び替え機能を実装",
      description:
        "ドラッグ＆ドロップでタスクの順番を変更できる機能を実装。ドラッグ中も並び替え結果が視覚的に分かるように改善しました。",
    },
  ];

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[#27374D]">開発履歴</h2>

      <p className="mb-6 leading-relaxed text-[#526D82]">
        ShibaToDoの主な実装履歴です。機能追加や改善の過程を記録しています。
      </p>

      <div className="space-y-4">
        {histories.map((history) => (
          <div
            key={`${history.date}-${history.title}`}
            className="rounded-2xl border border-[#9DB2BF]/40 bg-white/70 p-5 shadow-sm"
          >
            <p className="mb-2 text-sm font-semibold text-[#526D82]">
              {history.date}
            </p>

            <h3 className="mb-2 text-lg font-bold text-[#27374D]">
              {history.title}
            </h3>

            <p className="leading-relaxed text-[#526D82]">
              {history.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default History;
