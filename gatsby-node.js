const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve(`src/templates/BlogTemplate.js`);
  const logTemplate = path.resolve(`src/templates/logTemplate.js`);
  const miscTemplate = path.resolve(`src/templates/MiscTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              post
              log
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template = miscTemplate;
      if (node.frontmatter.post) template = blogTemplate;
      else if (node.frontmatter.log) template = logTemplate;

      return createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}
      });
    });
  });
};
