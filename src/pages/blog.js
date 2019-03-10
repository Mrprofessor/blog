import React from "react";
import { graphql } from "gatsby";
import BlogList from "./../components/blogList/Bloglist";
import Layout from "./../components/layout/Layout";

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

const Blog = ({ data }) => {
  return (
    <Layout>
      <div>
        <p>Listing all blogs</p>
        {data.allMarkdownRemark.edges && (
          <BlogList list={data.allMarkdownRemark.edges} />
        )}
      </div>
    </Layout>
  );
};

export default Blog;
