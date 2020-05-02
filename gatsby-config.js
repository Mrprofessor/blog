module.exports = {
  siteMetadata: {
    title: "rudra narayan",
    author: "Rudra Narayan",
    description: "Personal journal by Rudra Narayan.",
    titleTemplate: "thoughts, obsessions and mostly rants",
    siteUrl: "https://rudra.dev"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "prof's blog",
        short_name: "prof",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/favicon.ico", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        // Domain ID found when adding a domain in the admin panel.
        domainId: "45af9210-721f-4c09-a69d-77e66fe7bc5d",
        // URL to Server eg: "https://analytics.test.com".
        server: "https://prof-ackee.herokuapp.com",
        // Disabled analytic tracking when running locally
        ignoreLocalhost: false,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: true
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
};
