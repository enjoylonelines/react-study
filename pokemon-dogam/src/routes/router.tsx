import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Layout from "../pages/Layout";
import { createBrowserRouter } from "react-router-dom";
import Input from "../components/Input";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <>
            <Input />
            <Main />
          </>
        ),
      },
      { path: "/:id", element: <Detail /> },
    ],
  },
]);

export default router;
