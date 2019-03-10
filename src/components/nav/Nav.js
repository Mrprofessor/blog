import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/blog/">/blog</Link>
      </li>
      <li>
        <Link to="/projects/">/projects</Link>
      </li>
      <li>
        <Link to="/about/">/about</Link>
      </li>
    </ul>
  );
};

export default Nav;
