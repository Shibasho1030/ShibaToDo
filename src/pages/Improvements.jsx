function Improvements() {
  const improvements = [
    {
      title: "タスク完了トグルの操作感を改善",
      body: "トグル時は先にUIを更新し、後からAPIを同期する形に改善しました。更新失敗時は表示を元に戻すことで、UIとDBの不一致を防いでいます。あわせて、再リロードが起こる原因を分析し、操作後すぐに反応する使い心地を実現しました。",
    },
    {
      title: "AIを活用しつつ、自力で実装・改善を重ねたこと",
      body: "AIは、CSSの設計やクラス、静的UIのたたき台作成をしたり、不明点の確認、要件整理の壁打ちなどに活用しました。一方で、コンポーネント設計や状態管理、画面遷移、API連携、バグ修正、挙動の改善はAIに任せきりにするのではなく、補助として活用しながら実装や改造をしました。",
    },
    {
      title: "フロントエンドと json-server を分離",
      body: "開発時はフロントエンドとAPIを分けて動かし、不要な再描画や影響を受けにくい構成にしました。",
    },
    {
      title: "機能だけでなく使い心地まで意識",
      body: "単に動くだけではなく、タスク管理をノンストレスで行えるように、表示速度・導線・再読み込み耐性まで含めて改善しました。",
    },
  ];

  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">工夫した点</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            見た目だけでなく、実際に使ったときの使いやすさや、誤操作が起きにくいことまで意識して改善しました。
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {improvements.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#9DB2BF]/20 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#DDE6ED] px-3 py-1 text-xs font-semibold tracking-wide text-[#526D82]">
                Point
              </div>
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

export default Improvements;
