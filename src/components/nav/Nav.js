import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/projects/" activeClassName="active-link"> */}
          <Link className="disabled-link">/projects</Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active-link">
            /about
          </Link>
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

//<a
//href="https://github.com/mrprofessor/resume/blob/master/rudra_narayan_resume.pdf"
//target="_blank"
//>
///resume
//</a>

//<Link to="/resume/" activeClassName="active-link">
///resume
//</Link>
