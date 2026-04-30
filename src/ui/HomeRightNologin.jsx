function HomeRightNologin() {
  return (
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
          📈 タスクの進捗管理
        </div>
      </div>
    </>
  );
}

export default HomeRightNologin;
