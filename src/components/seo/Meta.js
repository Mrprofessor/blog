import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

function Meta({ isBlogPost = false, frontmatter = [] }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteMetaQuery {
          site {
            siteMetadata {
              title
              description
              author
              siteUrl
              titleTemplate
            }
          }
        }
      `}
      render={data =>
        isBlogPost ? (
          <Helmet
            meta={[
              {
                name: `description`,
                content: data.site.siteMetadata.description
              },
              {
                name: `og:url`,
                content: data.site.siteMetadata.siteUrl + frontmatter.path
              }
            ]}
            title={frontmatter.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <html lang="en" />
          </Helmet>
        ) : (
          <Helmet
            meta={[
              {
                name: `description`,
                content: data.site.siteMetadata.description
              },
              {
                name: `og:url`,
                content: data.site.siteMetadata.siteUrl
              }
            ]}
            title={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.titleTemplate}`}
          >
            <html lang="en" />
          </Helmet>
        )
      }
    />
  );
}

//Meta.propTypes = {
//meta: PropTypes.arrayOf(
//PropTypes.shape({
//content: PropTypes.string.isRequired,
//name: PropTypes.string.isRequired
//})
//),
//title: PropTypes.string
//};

//Meta.defaultProps = {
//title: `Inbox`,
//meta: []
//};

export default Meta;
