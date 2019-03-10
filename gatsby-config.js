module.exports = {
  siteMetadata: {
    title: "typecasted",
    author: "Rudra Narayan",
    description: "Personal journal by Rudra Narayan.",
    siteUrl: "https://mrprofessor.io"
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
