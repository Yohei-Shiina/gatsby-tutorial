/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MY GATSBY TUTORIAL SITE`,
    description:
      "This is the description of my gatsby tutorial website and I'd very much like to see this on twitter OGP",
    twitterUsername: `@yohe_0125`,
    image: "/sql.jpg",
    siteUrl: `https://gatsbytutorialbyyohei.gatsbyjs.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
