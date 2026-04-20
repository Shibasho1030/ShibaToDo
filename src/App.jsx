import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Tasks, { loader } from "./features/tasks/Tasks";
import AppLayout from "./ui/AppLayout";
import TaskForm from "./features/tasks/TaskForm";
import Login from "./features/accounts/Login";
import Error from "./ui/Error";
import CreateAccount from "./features/accounts/CreateAccount";
import { action as loginAction } from "./features/accounts/Login";
import Terms from "../src/features/pages/Terms";
import Privacy from "../src/features/pages/Privacy";

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
      },
      {
        path: "/tasks",
        element: <Tasks />,
        loader: loader,
      },
      {
        path: "/tasks/form",
        element: <TaskForm />,
      },
      // {
      //   path: "/tasks/:id",
      //   element: <Task />,
      // },
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
