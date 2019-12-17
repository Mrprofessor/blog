import React from "react";
import Nav from "../nav/Nav";
import BottomNav from "../bottomNav/BottomNav";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { createGlobalStyle } from "styled-components";

// Added styled components for faster font loading
// https://markoskon.com/extremely-fast-load-time-with-gatsby-and-self-hosted-fonts/
//
//@import url('https://raw.githubusercontent.com/kennethreitz/pep8.org/master/fonts/425974/1F0A82D67708082E5.css');
//@import url('https://fonts.googleapis.com/css?family=Noticia+Text&display=swap+Display:400,700');
//
// All fonts are added here for faster font loading and easier to maintain and
// change
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noticia+Text&display=swap+Display:400,700');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Noticia Text','Georgia',sans-serif;
  }
  h1, h2, h3, h4 {
    font-family: 'Operator A', 'Operator B';
    font-weight: 400;
  }
  code[class*="language-"], nav, .blog-list {
    font-family: "Operator Mono A", "Operator Mono B";
    font-style: normal;
    font-weight: 400;
    font-size: 1.025rem;
  }
  code {
    font-family: "Operator Mono A", "Operator Mono B";
  }
`;

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
        <GlobalStyle />
        <div className="title-wrapper">
          <Link to="/">
            <h2 className="title">{data.site.siteMetadata.title}</h2>
          </Link>
          <Nav />
        </div>
        {props.children}
        {props.bottomNav && <BottomNav />}
      </div>
    )}
  />
);

export default Layout;
