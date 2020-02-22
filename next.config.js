const contentful = require("contentful");
require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const path = require("path");

const { generateSitemap } = require("./next.sitemap")


const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = {
  webpack: (config, {dev}) => 
  ({
    ...config,
    plugins: [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ]
  }),
  // {
  //   config.plugins = config.plugins || [];
  //   config.plugins = [
  //     ...config.plugins,
  //     new Dotenv({
  //       path: path.join(__dirname, ".env"),
  //       systemvars: true
  //     })
  //   ];

  //   return config;
  // },

  exportPathMap: async (defaultPathMap, {dev}) => {

    if (dev) return {};
    
    const blogPosts = (
      await client.getEntries({content_type: "blogPost"})
    ).items.map(({sys}) => sys.id);

    const blogPostPathMap = blogPosts.reduce((acc, slug) => {
      acc[`/blog/${slug}`] = {
        page: "/blog/[slug]",
      };    
      return acc;
    }, {});

    const map = {
      ...defaultPathMap,
      ...blogPostPathMap
    };


    delete map["/blog/[slug]"];
    await generateSitemap(map, process.env.PUBLIC_DOMAIN, "./out/");
    
    return map
  }

};