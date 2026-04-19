import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="mx-auto w-full max-w-3xl flex-1 p-6  bg-[#DDE6ED]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
