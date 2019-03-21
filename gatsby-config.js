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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`
    }
  ]
};
