import api from "./api"

const getHero = () => 
  api.getEntries({ content_type: "hero" });

const getAboutMe = () =>
  api.getEntries({ content_type: "aboutMe", order: "sys.createdAt" });

const getProjects = () => 
  api.getEntries({ content_type: "projects", order: "-fields.order" });

const getBlog = () => 
  api.getEntries({content_type: "blogPost"});

const getBlogPost = (id) =>
  api.getEntry(id)

export const contentful = {
  getProjects,
  getHero,
  getBlog,
  getBlogPost,
  getAboutMe
};