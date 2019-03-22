import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/projects/">/projects</Link>
        </li>
        <li>
          <Link to="/about/">/about</Link>
        </li>
        <li>
          <a
            href="https://github.com/mrprofessor/resume/blob/master/rudra_narayan_resume.pdf"
            target="_blank"
          >
            /resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
