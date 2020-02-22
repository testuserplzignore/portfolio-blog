const contentful = require("contentful");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const { generateSitemap } = require("./next.sitemap")



module.exports = {
  webpack: (config, {dev}) =>{ 
  return ({
    ...config,
    plugins: [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ]
  })},

  exportPathMap: async (defaultPathMap, {dev}) => {
    console.log("HELLO");
    if (dev) return {};
    require("dotenv").config()
    console.log("NODE_ENV", process.env);
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
  }

};