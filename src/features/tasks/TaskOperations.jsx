function TaskOperations() {
  return (
    <div className="mb-5 flex flex-col gap-3 rounded-3xl border border-white/50 bg-white/60 px-3 py-3 shadow-sm backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-1.5">
        <button className="rounded-xl bg-[#6366F1] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4F46E5]">
          全て
        </button>

        <button className="rounded-xl px-3 py-1.5 text-xs font-medium text-[#526D82] transition hover:bg-white/80 hover:text-[#27374D]">
          未完了
        </button>

        <button className="rounded-xl px-3 py-1.5 text-xs font-medium text-[#526D82] transition hover:bg-white/80 hover:text-[#27374D]">
          高優先度
        </button>

        <button className="rounded-xl px-3 py-1.5 text-xs font-medium text-[#526D82] transition hover:bg-white/80 hover:text-[#27374D]">
          期限切れ
        </button>
      </div>

      <div className="relative self-start sm:self-auto">
        <select
          defaultValue="order"
          className="cursor-pointer appearance-none rounded-xl border border-transparent bg-white/70 py-1.5 pl-3 pr-9 text-xs font-medium text-[#27374D] shadow-sm outline-none transition hover:bg-white focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20"
        >
          <option value="order">カスタム</option>
          <option value="dueDate">日付順</option>
          <option value="priority">優先度順</option>
          <option value="createdAt">Sort by created date</option>
          <option value="completed">Sort by incomplete first</option>
        </select>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526D82]"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default TaskOperations;
