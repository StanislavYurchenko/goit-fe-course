import React from "react";

import AppBar from "../AppBar/AppBar";

function Layout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}

export default Layout;
