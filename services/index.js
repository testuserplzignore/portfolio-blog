import api from "./api"

export default api

const getHero = () => api.getEntries({ content_type: "hero" });

export {
  getHero,
}
