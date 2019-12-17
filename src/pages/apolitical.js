import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogList from "../components/blogList/BlogList";
import SlimDescription from "../components/slimDescription/SlimDescription";
import Meta from "../components/seo/Meta";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { post: { eq: null }, publish: { eq: true } } }
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

const Apolitical = ({ data }) => {
  return (
    <Layout>
      <Meta />
      <SlimDescription
        isHome={false}
        description={"Cleary this doesn't make any sense."}
      />
      {/*
      <div>
        {data.allMarkdownRemark.edges && (
          <BlogList list={data.allMarkdownRemark.edges} />
        )}
      </div>
      */}
    </Layout>
  );
};

export default Apolitical;
