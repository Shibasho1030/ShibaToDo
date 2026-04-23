import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";
import { getUsersApi } from "../../services/apiUsers";
import store from "../../store";
import { login } from "./accountsSlice";

// ログイン時のフォームコンポーネント
function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const { currentUserId } = useSelector((state) => state.users);
  const actionData = useActionData();
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

      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <p className="mb-3 inline-flex rounded-full border border-[#9DB2BF]/40 bg-[#DDE6ED]/70 px-4 py-1 text-sm font-medium text-[#526D82]">
              Welcome back
            </p>

            <h1 className="mb-2 text-3xl font-bold text-[#27374D]">ログイン</h1>

            <p className="text-sm leading-6 text-[#526D82]">
              アカウントにログインして
              <br />
              タスク管理を始めましょう
            </p>
          </div>

          <Form method="post" className="space-y-5">
            <div>
              {actionData?.error && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {actionData.error}
                </p>
              )}
              <label className="mb-2 block text-sm font-semibold text-[#27374D]">
                メールアドレス / ユーザー名
              </label>

              <input
                type="text"
                name="text"
                required
                defaultValue="shiba@example.com"
                placeholder="example@example.com / taro"
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
                defaultValue="shibasho"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-[#9DB2BF]/50 bg-white px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
              />
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#526D82]">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded border-[#9DB2BF]"
              />
              ログイン状態を保持する
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-[#27374D] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#526D82] hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "ログイン中..." : "ログインする"}
            </button>
          </Form>

          <div className="mt-6 text-center text-sm text-[#526D82]">
            アカウントをお持ちでない方は{" "}
            <Link
              to="/users/createAccount"
              className="cursor-pointer font-semibold text-[#27374D] hover:underline"
            >
              新規登録
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ログインフォーム送信後処理
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const userData = {
    ...data,
    remember: data.remember === "on",
  };
  // console.log(userData);

  // 認証機能
  const userDataFromApi = await getUsersApi();
  const passwordCheckedUser = userDataFromApi?.find(
    (user) => user.password === userData?.password,
  );
  if (
    passwordCheckedUser?.email !== userData?.text &&
    passwordCheckedUser.name !== userData.text
  )
    return { error: "ユーザー名またはパスワードが違います" };

  // ログイン処理
  if (userData.remember) {
    localStorage.setItem(
      "currentUserId",
      JSON.stringify(passwordCheckedUser.id),
    );
  } else {
    localStorage.removeItem("currentUserId");
  }

  store.dispatch(login(passwordCheckedUser.id));

  return redirect(`/tasks`);
}

export default Login;
