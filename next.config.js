const contentful = require("./services/contentful")
const Dotenv = require("dotenv-webpack");
const path = require("path");

const {generateSitemap} = require("./services/deploy/sitemap")


const deleteKey = (obj, key) => {
  if (!!obj && !!obj[key]) {
    delete obj[key];
  }
  console.log(obj);
  
  return obj
}

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

  exportPathMap: async (defaultPathMap, {dev}) => {
    console.log(defaultPathMap);
    
    const blogPosts = (await contentful.getBlog()).items.map(({sys}) => sys.id);

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

    if (!dev){
      delete map["/blog/[slug]"];
      generateSitemap(map, process.env.PUBLIC_DOMAIN, "./out/");
    }


    
    return map
  }

};