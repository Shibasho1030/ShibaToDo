function TechStack() {
  const techStack = [
    { name: "React", desc: "コンポーネントベースでUIを構築" },
    { name: "React Router", desc: "画面遷移とルーティング管理" },
    { name: "Redux", desc: "認証状態・タスク状態をグローバル管理" },
    { name: "Tailwind CSS", desc: "見やすく統一感のあるUIを構築" },
    {
      name: "json-server",
      desc: "バックエンドの代替として用いた",
    },
    {
      name: "ChatGPT",
      desc: "静的UIのたたき台・不明点の確認・実装の補助に活用",
    },
  ];

  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">使用技術</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            UI・状態管理・ルーティング・APIを役割ごとに整理しながら実装しました。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-[#9DB2BF]/20 bg-[#F8FBFD]/80 p-5 text-center shadow-sm"
            >
              <p className="text-base font-bold text-[#27374D]">{item.name}</p>
              <p className="mt-2 text-sm leading-6 text-[#526D82]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TechStack;
