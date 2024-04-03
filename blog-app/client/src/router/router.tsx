import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import DetailPage from "../pages/DetailPage";
import PostingPage from "../pages/PostingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      {
        path: "/post",
        element: <PostingPage />,
      },
    ],
  },
]);
