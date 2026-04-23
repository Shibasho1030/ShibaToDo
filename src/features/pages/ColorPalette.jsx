function ColorPalette() {
  return (
    <>
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-[#27374D]">使用カラー</h2>
          <p className="mt-2 text-sm leading-7 text-[#526D82]">
            全体のUIは、落ち着きと見やすさを意識して統一感のある配色でまとめました。
            <a
              href="https://colorhunt.co/palette/27374d526d829db2bfdde6ed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#526D82] font-bold hover:underline hover:text-[#526D82] "
            >
              (カラーパレット参考サイト)
            </a>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <div className="h-24 bg-[#27374D]"></div>
            <div className="p-4">
              <p className="font-semibold text-[#27374D]">#27374D</p>
              <p className="mt-1 text-sm text-[#526D82]">メインカラー</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <div className="h-24 bg-[#526D82]"></div>
            <div className="p-4">
              <p className="font-semibold text-[#27374D]">#526D82</p>
              <p className="mt-1 text-sm text-[#526D82]">補助カラー</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <div className="h-24 bg-[#9DB2BF]"></div>
            <div className="p-4">
              <p className="font-semibold text-[#27374D]">#9DB2BF</p>
              <p className="mt-1 text-sm text-[#526D82]">境界線・アクセント</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#9DB2BF]/20 bg-white shadow-sm">
            <div className="h-24 bg-[#DDE6ED]"></div>
            <div className="p-4">
              <p className="font-semibold text-[#27374D]">#DDE6ED</p>
              <p className="mt-1 text-sm text-[#526D82]">背景色</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ColorPalette;
