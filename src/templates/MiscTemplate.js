import React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/layout/Layout";
import Meta from "./../components/seo/Meta";
import withUtterances from "with-utterances";

const MiscTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout bottomNav={true}>
      <Meta />
      <div className="content">
        {/*
          <h2 className="title">{frontmatter.title}</h2>
        */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div>
        <withUtterances />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default MiscTemplate;
