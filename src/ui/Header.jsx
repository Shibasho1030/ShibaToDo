import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../features/accounts/accountsSlice";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isAuthPage =
    pathname === "/users/login" ||
    pathname === "/users/createAccount" ||
    pathname === "/tasks" ||
    pathname.startsWith("/tasks/") ||
    pathname === "/tasks/form";
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("currentUserId");
    navigate("/");
  }

  return (
    <header className="border-b border-[#9DB2BF]/40 bg-[#9DB2BF]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex">
          <Link
            to="/"
            className="text-xl font-semibold text-[#27374D] rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 cursor-pointer"
          >
            ShibaToDo
          </Link>
          <Link
            to="/"
            className="text-[#526D82] text-xl font-semibold rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 cursor-pointer opacity-70"
          >
            Readme
          </Link>
        </div>

        <nav className="flex gap-6 text-sm text-[#27374D]">
          {isAuthenticated && (
            <Link
              to="/tasks"
              className="rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
            >
              Tasks
            </Link>
          )}
          {!isAuthPage && !isAuthenticated && (
            <>
              <Link
                to="/users/createAccount"
                className="rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
              >
                Sign Up
              </Link>
              <Link
                to="/users/login"
                className="rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
              >
                Login
              </Link>
            </>
          )}
          {isAuthenticated && (
            <button
              type="button"
              onClick={() => handleLogout()}
              className="rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
