import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogList from "../components/blogList/BlogList";
import LearningsList from "../components/learningsList/LearningsList";
import SlimDescription from "../components/slimDescription/SlimDescription";
import Meta from "../components/seo/Meta";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { til: { eq: true }, publish: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
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

const TIL = ({ data }) => {
  return (
    <Layout bottomNav={true}>
      <Meta />
      <SlimDescription
        isHome={false}
        description={"Planet earth is not flat!"}
      />
      <div>
        {data.allMarkdownRemark.edges && (
          <LearningsList list={data.allMarkdownRemark.edges} />
        )}
      </div>
    </Layout>
  );
};

export default TIL;
