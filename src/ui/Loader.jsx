function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#9DB2BF]/30"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#27374D] border-r-[#526D82]"></div>
        </div>

        <p className="animate-pulse text-sm font-medium tracking-wide text-[#526D82]">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;
