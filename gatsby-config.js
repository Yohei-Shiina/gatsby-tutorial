/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Tutorial Site`,
    description: "Catsby site for tutorial",
    twitterUsername: `@yohe_0125`,
    image: "/ko-samui-beach.jpg",
    siteUrl: `https://www.yourdomain.tld`,
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
