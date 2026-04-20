import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-red-200/60 bg-white/80 p-8 shadow-xl backdrop-blur-md">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl shadow-sm">
            ⚠️
          </div>

          <h2 className="mb-2 text-2xl font-bold text-[#27374D]">
            問題が発生しました
          </h2>

          <p className="mb-6 text-sm leading-6 text-[#526D82]">
            データの読み込みに失敗しました。
            <br />
            時間をおいてもう一度お試しください。
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(0)}
              className="rounded-2xl bg-[#27374D] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#526D82]"
            >
              再読み込み
            </button>

            <button
              onClick={() => navigate(-1)}
              className="rounded-2xl border border-[#9DB2BF] px-5 py-2 text-sm font-semibold text-[#27374D] transition hover:bg-[#DDE6ED]"
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
