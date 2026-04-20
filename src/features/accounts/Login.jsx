import { Form, Link, redirect, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getUsersApi } from "../../services/apiUsers";

function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { currentUserId } = useSelector((state) => state.users);

  function handleRestoreLogin() {
    localStorage.setItem("currentUserId", JSON.stringify(currentUserId));
  }

  function handleLogin() {
    currentUserId && handleRestoreLogin();
  }

  return (
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
            <label className="mb-2 block text-sm font-semibold text-[#27374D]">
              メールアドレス / ユーザー名
            </label>

            <input
              type="email"
              name="email"
              required
              defaultValue="shiba@example.com"
              placeholder="example@example.com"
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
            onClick={handleLogin}
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
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const userData = {
    ...data,
    remember: data.remember === "on",
  };
  console.log(userData);
  const userDataFromApi = await getUsersApi();
  const passwordCheckeduser = userDataFromApi.find(
    (user) => user.password === userData.password,
  );
  if (passwordCheckeduser.email !== userData.email) return;

  // ログイン処理

  return redirect(`/tasks`);
}

export default Login;
