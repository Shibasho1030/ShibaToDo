import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Tasks from "./features/tasks/Tasks";
import AppLayout from "./ui/AppLayout";
import TaskForm from "./features/tasks/TaskForm";
import Login from "./features/accounts/Login";
import Error from "./ui/Error";
import CreateAccount from "./features/accounts/CreateAccount";
import { action as loginAction } from "./features/accounts/Login";
import { action as createAccountAction } from "./features/accounts/CreateAccount";
import Terms from "../src/features/pages/Terms";
import Privacy from "../src/features/pages/Privacy";
import TaskShow from "./features/tasks/TaskShow";

// console.log("App mount");

// アプリ全体のルーティング設定
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/users/createAccount",
        element: <CreateAccount />,
        action: createAccountAction,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/tasks/form",
        element: <TaskForm />,
      },
      {
        path: "/tasks/:id/form",
        element: <TaskForm />,
      },
      {
        path: "/tasks/:id",
        element: <TaskShow />,
      },
    ],
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

// ルーター設定をアプリ全体へ適応するメインコンポーネント
function App() {
  return <RouterProvider router={router} />;
}

export default App;
