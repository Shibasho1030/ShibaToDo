function Closing() {
  return (
    <>
      <section className="rounded-3xl border border-[#9DB2BF]/20 bg-gradient-to-r from-[#27374D] to-[#526D82] px-6 py-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">まとめ</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-white/90 sm:text-base">
          このアプリでは、CRUDの実装に加え、ログイン状態の保持、
          再読み込み時のデータ復元、タスク完了トグルの操作感改善など、
          ユーザーが実際に使うときの体験まで意識して作り込みました。
          どうすれば快適に使えるかを考えながら改善した点がこだわりです。
          <br />
          一方で、今後の課題としては、RouterのactionがReduxストアを直接操作している設計になっているため、
          今後よりよい構成に改善していきたいと考えています。
        </p>
      </section>
    </>
  );
}

export default Closing;
