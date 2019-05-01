const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/professor/projects/rudra.dev/src/templates/BlogTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/professor/projects/rudra.dev/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/professor/projects/rudra.dev/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/professor/projects/rudra.dev/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/professor/projects/rudra.dev/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/professor/projects/rudra.dev/src/pages/projects.js")))
}

