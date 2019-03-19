import React from "react";
import Nav from "../nav/Nav";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

//export const siteQuery = graphql`
//query {
//site {
//siteMetadata {
//title
//description
//}
//}
//}
//`;

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
