import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Blog from "./blog";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { publish: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            publish
          }
          id
        }
      }
    }
  }
`;

export default ({ data }) => {
  return <Blog data={data} />;
};
