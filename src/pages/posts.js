import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import BlogList from "../components/blogList/BlogList";
import SlimDescription from "../components/slimDescription/SlimDescription";
import Meta from "../components/seo/Meta";

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              post: { eq: true }
              log: { ne: true }
              publish: { eq: true }
            }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                date
                path
                publish
                post
              }
              id
            }
          }
        }
      }
    `}
    render={data => (
      <Layout bottomNav={true}>
        <Meta />
        <SlimDescription isHome={true} />
        <div>
          {data.allMarkdownRemark.edges && (
            <BlogList list={data.allMarkdownRemark.edges} />
          )}
        </div>
      </Layout>
    )}
  />
);

export default Posts;
