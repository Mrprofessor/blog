import React from "react";
import Nav from "../nav/Nav";
import { StaticQuery, graphql } from "gatsby";

export const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

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
        <h2 className="title">{data.site.siteMetadata.title}</h2>
        <Nav />
        {props.children}
      </div>
    )}
  />
);

export default Layout;
