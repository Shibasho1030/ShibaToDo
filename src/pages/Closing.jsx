function Closing() {
  return (
    <>
      <section className="rounded-3xl border border-[#9DB2BF]/20 bg-gradient-to-r from-[#27374D] to-[#526D82] px-6 py-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">まとめ</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
          このアプリでは、CRUD機能の実装に加え、ログイン状態の保持、
          再読み込み時のデータ復元、タスク完了トグルの操作感改善など、
          ユーザーが実際に使う場面を想定して作り込みました。
          <br />
          特に苦労した点は、再読み込みによってReduxのステートが初期化され、
          画面表示やログイン状態、タスク詳細の表示などに不具合が発生したことです。
          そのため、再読み込み後も必要な情報を復元できるように改善しました。
          <br />
          実際にWebアプリを制作する中で、これまで学んできたReact、Redux、 React
          Router、非同期処理などの知識がまだ曖昧だったことを実感しました。
          一方で、エラーの原因を一つずつ調べながら修正を重ねることで、
          それぞれの知識がつながり、アプリ全体のデータの流れをより明確に理解できました。
          <br />
          今後の課題としては、RouterのactionがReduxストアを直接操作している設計を見直し、
          より保守しやすい構成に改善していきたいと考えています。
        </p>
      </section>
    </>
  );
}

export default Closing;
