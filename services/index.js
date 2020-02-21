import api from "./api"


const getHero = () => 
  api.getEntries({ content_type: "hero" });

const getAboutMe = () =>
  api.getEntries({ content_type: "aboutMe", order: "sys.createdAt" });

const getProjects = () => 
  api.getEntries({ content_type: "projects", order: "-fields.order" });


export {
  getHero,
  getAboutMe,
  getProjects
}