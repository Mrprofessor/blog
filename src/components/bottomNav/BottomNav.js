import React from "react";
import { Link } from "gatsby";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <nav>
        <ul>
          {/*
          <li>
            <Link to="/apolitical/" activeClassName="active-link">
              apolitical
            </Link>
          </li>
          */}
          <li>
            <Link to="/about/" activeClassName="active-link">
              about
            </Link>
          </li>
          <li>
            <Link to="/logs/" activeClassName="active-link">
              logs
            </Link>
          </li>
          <li>
            <Link to="/til/" activeClassName="active-link">
              til
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
