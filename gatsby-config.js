module.exports = {
  siteMetadata: {
    title: `New Peak Computing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/newpeak-logo.png",
      },
    },
  ],
};
