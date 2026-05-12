import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../features/accounts/accountsSlice";
import { FaTasks } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import toast from "react-hot-toast";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isAuthPage =
    pathname === "/users/login" ||
    pathname === "/users/createAccount" ||
    pathname.startsWith("/tasks");
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("currentUserId");
    toast("ログアウトしました");
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#9DB2BF]/40 bg-[#9DB2BF]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex gap-5">
          <Link
            to="/"
            className="text-xl font-semibold text-[#27374D] rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 cursor-pointer"
          >
            ShibaToDo
          </Link>
          <Link
            target="_blank"
            // 新しく開いたページから元ページを操作しにくくするセキュリティ対策、リンク元ページを送らない設定。
            rel="noopener noreferrer"
            to="/Readme"
            className="flex gap-2 text-[#526D82] text-xl font-semibold rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 cursor-pointer opacity-90"
          >
            <FiBookOpen className="mt-1.5" />
            <span>Readme</span>
          </Link>
        </div>

        <nav className="flex gap-6 text-sm text-[#27374D]">
          {isAuthenticated && (
            <Link
              to="/tasks"
              className="flex gap-2  rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
            >
              <FaTasks className="mt-1.5" />
              <span>Tasks</span>
            </Link>
          )}
          {isAuthenticated && (
            <button
              type="button"
              onClick={() => handleLogout()}
              className="flex gap-2 rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
            >
              <FiLogOut className="mt-1.5" />
              <span>Logout</span>
            </button>
          )}
          {!isAuthPage && !isAuthenticated && (
            <>
              <Link
                to="/users/createAccount"
                className="flex gap-2 rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
              >
                <FiUserPlus className="mt-1.5" />
                <span>Sign Up</span>
              </Link>
              <Link
                to="/users/login"
                className="flex gap-2 rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
              >
                <FiLogIn className="mt-1.5" />
                <span>Login</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
