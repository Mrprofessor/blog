import React from "react";
import Layout from "./../components/layout/Layout";
import BlogList from "./../components/blogList/Bloglist";
import Blog from "./Blog";

import "typeface-overpass";
import "typeface-overpass-mono";

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

//<Layout>
//<div>
//<div>
//{data.allMarkdownRemark.edges && (
//<BlogList list={data.allMarkdownRemark.edges} />
//)}
//</div>
//</div>
//</Layout>
