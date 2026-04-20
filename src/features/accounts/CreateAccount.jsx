import { Form, Link, useNavigation } from "react-router-dom";

function CreateAccount() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-3 inline-flex rounded-full border border-[#9DB2BF]/40 bg-[#DDE6ED]/70 px-4 py-1 text-sm font-medium text-[#526D82]">
            Get Started
          </p>

          <h1 className="mb-2 text-3xl font-bold text-[#27374D]">
            アカウント作成
          </h1>

          <p className="text-sm leading-6 text-[#526D82]">
            新しいアカウントを作成して
            <br />
            タスク管理を始めましょう
          </p>
        </div>

        <Form method="post" className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#27374D]">
              ユーザー名
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Shohei"
              className="w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#27374D]">
              メールアドレス
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#27374D]">
              パスワード
            </label>

            <input
              type="password"
              name="password"
              required
              minLength="6"
              placeholder="6文字以上で入力"
              className="w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#27374D]">
              パスワード確認
            </label>

            <input
              type="password"
              name="confirmPassword"
              required
              minLength="6"
              placeholder="もう一度入力してください"
              className="w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            />
          </div>

          <label className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-[#526D82]">
            <input
              type="checkbox"
              name="agree"
              required
              className="mt-1 h-4 w-4 rounded border-[#9DB2BF]"
            />
            <Link
              target="_blank"
              // 新しく開いたページから元ページを操作しにくくするセキュリティ対策、リンク元ページを送らない設定。
              rel="noopener noreferrer"
              to="/terms"
              className="cursor-pointer font-semibold text-[#27374D] hover:underline"
            >
              利用規約
            </Link>
            および
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="/privacy"
              className="cursor-pointer font-semibold text-[#27374D] hover:underline"
            >
              プライバシーポリシー
            </Link>
            に同意します
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[#27374D] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "作成中..." : "アカウントを作成"}
          </button>
        </Form>

        <div className="mt-6 text-center text-sm text-[#526D82]">
          すでにアカウントをお持ちですか？{" "}
          <Link
            to="/users/login"
            className="cursor-pointer font-semibold text-[#27374D] hover:underline"
          >
            ログイン
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;
