const sizes = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-3",
  lg: "h-12 w-12 border-4",
};

function Spinner({ size = "md", text = "読み込み中...", fullPage = false }) {
  return (
    <div
      className={
        fullPage
          ? "flex min-h-[60vh] flex-col items-center justify-center gap-4"
          : "flex items-center justify-center gap-3 py-6"
      }
    >
      <div className="relative">
        <div
          className={`${sizes[size]} animate-spin rounded-full border-[#DDE6ED] border-t-[#27374D]`}
        />
        <div className="absolute inset-0 rounded-full shadow-[0_0_24px_rgba(39,55,77,0.18)]" />
      </div>

      {text && (
        <p className="text-sm font-medium tracking-wide text-[#526D82]">
          {text}
        </p>
      )}
    </div>
  );
}

export default Spinner;
