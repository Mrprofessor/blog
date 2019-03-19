import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about/">/about</Link>
        </li>
        <li>
          <Link to="/blog/">/resume</Link>
        </li>
        <li>
          <Link to="/projects/">/projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
