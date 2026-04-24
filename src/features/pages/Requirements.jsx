function Requirements() {
  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">要件定義</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]"></p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#9DB2BF]/20 bg-white p-6 shadow-sm">
            <p className="mb-3 inline-flex rounded-2xl bg-[#DDE6ED] px-3 py-1 text-xs font-semibold tracking-wide text-[#526D82]">
              機能要件
            </p>
            <ul className="space-y-3 text-sm leading-7 text-[#526D82]">
              <li>
                ・アカウント作成、ログイン、ログイン状態の保持、ログアウト機能を実装する。
              </li>
              <li>
                ・ログイン状態を保持し、再アクセス時にも認証状態を復元できるようにする。
              </li>
              <li>・ユーザーごとに自分のタスクのみを管理できるようにする。</li>
              <li>
                ・タスクの追加、編集、削除、詳細表示、完了切り替えを実装する。
              </li>
              <li>
                ・ホーム画面で未完了タスクやタスク数のサマリーを確認できるようにする。
              </li>
              <li>
                ・ホーム画面ではログイン状態に応じて期限が近いタスクが表示されるようにする。
              </li>
              <li>
                ・ヘッダーでは未ログイン時はSignUp/Login、ログイン時はTasks/Logoutが表示されるようにする。
              </li>
              <li>・認証状態が解除された場合、トップ画面へ戻ること。</li>
              <li>
                ・ホーム上のタスクカードはダブルクリックで詳細画面へ遷移できること。
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-[#9DB2BF]/20 bg-white p-6 shadow-sm">
            <p className="mb-3 inline-flex rounded-2xl bg-[#DDE6ED] px-3 py-1 text-xs font-semibold tracking-wide text-[#526D82]">
              非機能要件
            </p>
            <ul className="space-y-3 text-sm leading-7 text-[#526D82]">
              <li>
                ・未ログイン時とログイン後でヘッダーやホームの表示内容を切り替える。
              </li>
              <li>・Figmaで設計した画面をもとにUIを実装する。</li>
              <li>・未ログイン時はアプリ概要とログイン導線を表示する。</li>
              <li>
                ・再読み込み時にも必要なデータを再取得し、画面を復元できるようにする。
              </li>
              <li>・操作感は直感的であること。</li>
              <li>・専用のエラー画面・ローディング画面を表示できること。</li>
              <li>・UIコンポーネント、API関数、状態管理を分けること。</li>
              <li>
                ・同系統のカラーを用い画面デザインに統一感をもたせること。
              </li>
              <li>・優先度や状態を色付きラベルで見やすくすること。</li>
              <li>
                ・再読み込み時にも必要なデータを再取得し、画面を復元できるようにする
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

export default Requirements;
