import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Tasks, { loader } from "./features/tasks/Tasks";
import AppLayout from "./ui/AppLayout";
import Task from "./features/tasks/Task";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
        loader: loader,
      },
      {
        path: "/tasks/:id",
        element: <Task />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
