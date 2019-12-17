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
          {/* <Link to="/projects/" activeClassName="active-link"> */}
          {/* <Link className="disabled-link">projects</Link> */}
          <Link to="/projects/" activeClassName="active-link">
            projects
          </Link>
        </li>
        {/* 
        <li>
          <Link to="/about/" activeClassName="active-link">
            about
          </Link>
        </li>
        */}
        <li>
          <a
            //href="https://github.com/mrprofessor/resume/blob/master/rudra_narayan_resume.pdf"
            href="/rudra_narayan_resume.pdf"
            target="_blank"
          >
            resume
          </a>
        </li>
        {/* 
        <li>
          <Link to="/logs/" activeClassName="active-link">
            logs
          </Link>
        </li>
        */}
      </ul>
    </nav>
  );
};

export default Nav;
