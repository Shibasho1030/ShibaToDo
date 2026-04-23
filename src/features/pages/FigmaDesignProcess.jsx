function FigmaDesignProcess() {
  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">
            Figmaでの画面設計
          </h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            実装に入る前にFigmaで各画面のワイヤーフレームを作成し、
            画面構成や導線を整理してからWebアプリとして開発しました。
            先に全体像を設計してからReactとTailwind
            CSSで画面を組み立てたことで、
            一覧・詳細・作成/編集・認証画面まで一貫性を持って実装できました。
          </p>
        </div>

        <div className="mb-6 rounded-3xl border border-[#9DB2BF]/20 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#F8FBFD] p-4">
              <p className="text-sm font-semibold text-[#27374D]">
                1. 画面設計
              </p>
              <p className="mt-2 text-sm leading-7 text-[#526D82]">
                ホーム、一覧、詳細、フォーム、ログイン、サインアップ画面をFigmaで作成
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FBFD] p-4">
              <p className="text-sm font-semibold text-[#27374D]">
                2. 導線の整理
              </p>
              <p className="mt-2 text-sm leading-7 text-[#526D82]">
                画面遷移やボタン配置、情報の見せ方を事前に整理してから実装
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FBFD] p-4">
              <p className="text-sm font-semibold text-[#27374D]">
                3. Webアプリ化
              </p>
              <p className="mt-2 text-sm leading-7 text-[#526D82]">
                Figmaの設計をもとに、React・Tailwind CSSで実際のUIとして再現
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a
              href="/NologinHome.png"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/NologinHome.png"
                alt="Figmaで作成した未ログイン時ホーム画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              未ログイン時ホーム画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a
              href="/LoginHome.png"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/LoginHome.png"
                alt="Figmaで作成したログイン後ホーム画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              ログイン後ホーム画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a href="/tasks.png" rel="noopener noreferrer" className="block">
              <img
                src="/tasks.png"
                alt="Figmaで作成したタスク一覧画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              タスク一覧画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a href="/taskShow.png" rel="noopener noreferrer" className="block">
              <img
                src="/taskShow.png"
                alt="Figmaで作成したタスク詳細画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              タスク詳細画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a
              href="/newTaskForm.png"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/newTaskForm.png"
                alt="Figmaで作成した新規タスク作成画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              新規タスク作成画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a
              href="/editTaskForm.png"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/editTaskForm.png"
                alt="Figmaで作成したタスク編集画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              タスク編集画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a href="/Login.png" rel="noopener noreferrer" className="block">
              <img
                src="/Login.png"
                alt="Figmaで作成したログイン画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              ログイン画面
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <a href="/SignUp.png" rel="noopener noreferrer" className="block">
              <img
                src="/SignUp.png"
                alt="Figmaで作成したサインアップ画面"
                className="h-56 w-full object-cover object-top"
                loading="lazy"
              />
            </a>
            <figcaption className="p-4 text-sm text-[#526D82]">
              サインアップ画面
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default FigmaDesignProcess;
