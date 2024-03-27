import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ColorImporter } from "../components/ColorImporter";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <ColorImporter />
    </React.Fragment>
  );
}

export default Layout;
