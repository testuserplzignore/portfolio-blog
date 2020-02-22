const contentful = require("./services/contentful")
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  webpack: config => {
    config.target = "node";
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  },

  exportPathMap: async (defaultPathMap) => {
    const blogPosts = (await contentful.getBlog()).items.map(({sys}) => sys.id);

    const blogPostPathMap = blogPosts.reduce((acc, slug) => {
      acc[`/blog/${slug}`] = {
        page: "/blog/[slug]",
      };    
      return acc;
    }, {});
    
    delete defaultPathMap["/blog/[slug]"];
    
    return {
      ...defaultPathMap,
      ...blogPostPathMap
    };
  }
};