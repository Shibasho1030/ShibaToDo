function Hello() {
  return (
    <>
      <div className="border-b border-[#9DB2BF]/30 bg-gradient-to-br from-[#DDE6ED] via-white to-[#F8FBFD] px-6 py-10 sm:px-10 sm:py-14">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-[#9DB2BF]/40 bg-white/70 px-4 py-1 text-sm font-medium text-[#526D82]">
            Portfolio / README
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#27374D] sm:text-5xl">
            ShibaToDo
          </h1>
          <h2 className="mt-7 text-xl font-bold text-[#27374D]">制作の背景</h2>
          <p className=" max-w-3xl text-base leading-8 text-[#526D82] sm:text-lg">
            私は一つのことに集中して取り組むことが得意な一方で、複数のタスクを同時に整理しながら進めることに課題を感じていました。そこで、自分自身のタスク管理力を高めることを目的に、日々の予定や作業を分かりやすく管理できるアプリを制作しました。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#27374D] px-4 py-2 text-sm font-semibold text-white">
              React
            </span>
            <span className="rounded-full bg-[#526D82] px-4 py-2 text-sm font-semibold text-white">
              Redux
            </span>
            <span className="rounded-full bg-[#9DB2BF] px-4 py-2 text-sm font-semibold text-[#27374D]">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-[#DDE6ED] px-4 py-2 text-sm font-semibold text-[#27374D]">
              json-server
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hello;
