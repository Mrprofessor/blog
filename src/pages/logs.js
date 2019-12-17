import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogList from "../components/blogList/BlogList";
import SlimDescription from "../components/slimDescription/SlimDescription";
import Meta from "../components/seo/Meta";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { log: { eq: true }, publish: { eq: true } } }
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

const Log = ({ data }) => {
  return (
    <Layout bottomNav={true}>
      <Meta />
      <SlimDescription
        isHome={false}
        description={"Unimportant, blunt and raw stuff."}
      />
      <div>
        {data.allMarkdownRemark.edges && (
          <BlogList list={data.allMarkdownRemark.edges} />
        )}
      </div>
    </Layout>
  );
};

export default Log;
