const contentful = require("contentful");
const Dotenv = require("dotenv-webpack");
const path = require("path");
require("dotenv").config();

const { generateSitemap } = require("./next.sitemap")



module.exports = {
  webpack: (config, {dev}) => { 

    const plugins = [
      ...config.plugins,
      new Dotenv({
        systemvars: true
      })
    ];

    return ({
      ...config,
      plugins
    });
  },

  exportPathMap: async (defaultPathMap, {dev}) => {
    if (dev) return {};

    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    
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
    return defaultPathMap;
  }

};