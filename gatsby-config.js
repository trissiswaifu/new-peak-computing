module.exports = {
  siteMetadata: {
    title: `New Peak Computing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/newpeak-logo.png",
      },
    },
  ],
};
