import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createUserApi, getUsersApi } from "../../services/apiUsers";
import { login } from "./accountsSlice";
import store from "../../store";
import toast from "react-hot-toast";

// アカウント作成用UIコンポーネント
function CreateAccount() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      {actionData?.error && (
        <>
          <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 shadow-sm">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              !
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-red-700">
                入力内容をご確認ください
              </p>
              <p className="mt-1 text-sm leading-6 text-red-600">
                {actionData.error}
              </p>
            </div>
          </div>
        </>
      )}

      <section className="flex  items-center justify-center px-4 py-10">
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
              <label
                htmlFor="createAccount-text"
                className="mb-2 block text-sm font-semibold text-[#27374D]"
              >
                ユーザー名
              </label>
              {actionData?.field === "name" && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {actionData.error}
                </p>
              )}

              <input
                id="createAccount-text"
                type="text"
                name="name"
                autoComplete="username"
                required
                placeholder="Taro"
                className={`w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30 ${actionData?.field === "name" ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200" : "border-[#9DB2BF]/50 focus:border-[#526D82] focus:ring-[#9DB2BF]/30"}`}
              />
            </div>

            <div>
              <label
                htmlFor="createAccount-email"
                className="mb-2 block text-sm font-semibold text-[#27374D]"
              >
                メールアドレス
              </label>
              {actionData?.field === "email" && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {actionData.error}
                </p>
              )}

              <input
                id="createAccount-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="example@email.com"
                className={`w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30 ${actionData?.field === "email" ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200" : "border-[#9DB2BF]/50 focus:border-[#526D82] focus:ring-[#9DB2BF]/30"}`}
              />
            </div>

            <div>
              <label
                htmlFor="createAccount-password"
                className="mb-2 block text-sm font-semibold text-[#27374D]"
              >
                パスワード
              </label>
              {actionData?.field === "password" && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {actionData.error}
                </p>
              )}

              <input
                id="createAccount-password"
                type="password"
                name="password"
                autoComplete="new-password"
                required
                minLength="6"
                placeholder="6文字以上で入力"
                className={`w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30 ${actionData?.field === "password" ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200" : "border-[#9DB2BF]/50 focus:border-[#526D82] focus:ring-[#9DB2BF]/30"}`}
              />
            </div>

            <div>
              <label
                htmlFor="createAccount-passwordCheck"
                className="mb-2 block text-sm font-semibold text-[#27374D]"
              >
                パスワード確認
              </label>

              <input
                id="createAccount-passwordCheck"
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                required
                minLength="6"
                placeholder="もう一度入力してください"
                className={`w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30 ${actionData?.field === "password" ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200" : "border-[#9DB2BF]/50 focus:border-[#526D82] focus:ring-[#9DB2BF]/30"}`}
              />
            </div>

            <label
              htmlFor="createAccount-checkbox"
              className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-[#526D82]"
            >
              <input
                id="createAccount-checkbox"
                type="checkbox"
                name="agree"
                required
                className="mt-1 h-4 w-4 rounded border-[#9DB2BF]"
              />
              <span></span>
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
    </>
  );
}

// アカウント制作フォーム送信後処理
export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);

    const dataFromApi = await getUsersApi();
    if (
      dataFromApi.some(
        (user) => data.name.toLowerCase() === user.name.toLowerCase(),
      )
    )
      return { field: "name", error: "既にこのユーザー名は使用されています" };
    // console.log('name is ok')
    if (dataFromApi.some((user) => data.email === user.email))
      return {
        field: "email",
        error: "既にこのメールアドレスは使用されています",
      };
    // console.log('email is ok')
    if (data.password !== data.confirmPassword)
      return { field: "password", error: "パスワードが不一致です" };
    // console.log('password is ok')

    // ログイン処理
    const newAccountObj = {
      name: data.name,
      email: data.email,
      password: data.password,
      id: crypto.randomUUID(),
    };
    // console.log(newAccountObj.id);
    const data2 = await createUserApi(newAccountObj);
    // console.log(data2);
    store.dispatch(login(data2.id));
    toast.success("アカウントを作成しました");
    return redirect("/");
  } catch (err) {
    console.error(err.message);
  }
}

export default CreateAccount;
