import React from "react";
import Nav from "../nav/Nav";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

// Need to use StaticQuery while quering in side a non-page component.
const Layout = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <div className="title-wrapper">
          <Link to="/">
            <h2 className="title">{data.site.siteMetadata.title}</h2>
          </Link>
          <Nav />
        </div>
        {props.children}
      </div>
    )}
  />
);

export default Layout;
