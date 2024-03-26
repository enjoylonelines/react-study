import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Layout from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Main /> },
      { path: ":id", element: <Detail /> },
    ],
  },
]);

export default router;
