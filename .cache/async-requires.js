// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("/Users/professor/projects/rudra.dev/src/templates/BlogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---src-pages-404-js": () => import("/Users/professor/projects/rudra.dev/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/professor/projects/rudra.dev/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("/Users/professor/projects/rudra.dev/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("/Users/professor/projects/rudra.dev/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("/Users/professor/projects/rudra.dev/src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-resume-js": () => import("/Users/professor/projects/rudra.dev/src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/professor/projects/rudra.dev/.cache/data.json")

