module.exports = {
  siteMetadata: {
    title: "rudra narayan",
    author: "Rudra Narayan",
    description: "Personal journal by Rudra Narayan.",
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
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
