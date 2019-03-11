import React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/layout/Layout";

const BlogTemplate = ({ data }) => {
  console.log(data);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="content">
        <h1 className="title">{frontmatter.title}</h1>
        <sub>{frontmatter.date}</sub>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default BlogTemplate;
