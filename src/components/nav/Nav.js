import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  // TODO
  // Add a config for navs
  return (
    <nav>
      <ul>
        <li>
          <Link to="/posts/" activeClassName="active-link">
            posts
          </Link>
        </li>
        <li>
          <Link to="/projects/" activeClassName="active-link">
            projects
          </Link>
        </li>
        <li>
          <a href="/resume" target="_blank">
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
