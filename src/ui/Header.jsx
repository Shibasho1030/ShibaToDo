import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { isAuthenticated } = useSelector((state) => state.users);
  const { pathname } = useLocation();
  const isLoginPage =
    pathname === "/users/login" || pathname === "/users/createAccount";

  return (
    <header className="border-b border-[#9DB2BF]/40 bg-[#9DB2BF]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-semibold text-[#27374D] rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 cursor-pointer"
        >
          ShibaToDo
        </Link>

        <nav className="flex gap-6 text-sm text-[#27374D]">
          {isAuthenticated && (
            <Link
              to="/tasks"
              className="rounded-xl text-lg px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
            >
              Tasks
            </Link>
          )}
          {!isLoginPage && !isAuthenticated && (
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
