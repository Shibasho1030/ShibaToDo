import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// Reduxストアを共有し、状態をアプリ全体で使えるようにするための処理、アプリを描画する処理
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <App />
      </Provider>

      <Toaster
        position="top-center"
        gutter={14}
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          duration: 3500,

          style: {
            fontSize: "14px",
            fontWeight: 500,
            maxWidth: "420px",
            padding: "14px 18px",
            borderRadius: "14px",
            background: "rgba(255, 255, 255, 0.92)",
            color: "#1f2937",
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            backdropFilter: "blur(12px)",
          },

          success: {
            duration: 3000,
            iconTheme: {
              primary: "#22c55e",
              secondary: "#ffffff",
            },
          },

          error: {
            duration: 5000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid rgba(252, 165, 165, 0.8)",
              background: "rgba(255, 247, 247, 0.95)",
              color: "#7f1d1d",
            },
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>,
);
