import React from "react";
import Nav from "../nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <h2 className="title">Rudra Narayan</h2>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
