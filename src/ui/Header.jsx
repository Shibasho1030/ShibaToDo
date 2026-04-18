import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-[#9DB2BF]/40 bg-[#9DB2BF]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-semibold text-[#27374D] rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
        >
          ShibaToDo
        </Link>

        <nav className="flex gap-6 text-sm text-[#27374D]">
          <Link
            to="/tasks"
            className="rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
          >
            Tasks
          </Link>
          <Link
            to="/"
            className="rounded-xl px-2 py-1 transition hover:bg-[#9DB2BF] hover:text-stone-800 font-semibold cursor-pointer"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
