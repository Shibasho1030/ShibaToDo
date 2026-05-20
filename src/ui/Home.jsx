import { useSelector } from "react-redux";
import HomeLeft from "./HomeLeft";
import HomeRightLogin from "./HomeRightLogin";
import HomeRightNologin from "./HomeRightNologin";

function Home() {
  const { isAuthenticated } = useSelector((state) => state.users);

  return (
    <section className="flex min-h-[calc(100vh-140px)] items-center justify-center px-6 py-12">
      <div className="w-full min-w-75 max-w-5xl rounded-4xl border border-white/40 bg-white/40 p-8 shadow-xl backdrop-blur-md md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <HomeLeft />

          {/* Right */}
          <div className="relative ">
            <div className="absolute -left-6 -top-6 h-24 w-24  rounded-full bg-[#9DB2BF]/30 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#526D82]/20 blur-2xl"></div>

            <div className="rounded-[28px] min-w-60 border border-[#9DB2BF]/30 bg-[#F8FBFD]/80 p-6 shadow-lg">
              {!isAuthenticated ? <HomeRightNologin /> : <HomeRightLogin />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
