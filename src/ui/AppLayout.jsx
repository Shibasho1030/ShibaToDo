import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <main className="mx-auto w-full max-w-3xl flex-1 p-6  bg-[#DDE6ED]">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default AppLayout;
