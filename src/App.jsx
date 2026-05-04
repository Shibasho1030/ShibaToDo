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
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import TaskShow from "./features/tasks/TaskShow";
import Readme from "./pages/Readme";
import { action as toggleTaskAction } from "./features/tasks/TaskItem";

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
      {
        path: "/tasks/:taskId/toggle",
        action: toggleTaskAction,
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
  {
    path: "/readme",
    element: <Readme />,
  },
]);

// ルーター設定をアプリ全体へ適応するメインコンポーネント
function App() {
  return <RouterProvider router={router} />;
}

export default App;
