import {
  ARTICLE,
  BASEAPIURL,
  CATEGORY,
  DELETE,
  GET,
  POST,
  PUT,
  SHOW,
  showError,
  USER,
} from "@/constants";
const toggleMenu = async ({ commit }, value) => commit("setMenu", value);
const changeArticles = ({ commit }, value) =>
  commit("article/setArticles", value);
const index = ({ dispatch }, store) =>
  dispatch("chooseStore", { store: store, type: "index" });
const save = ({ dispatch }, store) =>
  dispatch("chooseStore", { store: store, type: "save" });
const remove = ({ dispatch }, store) =>
  dispatch("chooseStore", { store: store, type: "remove" });
const reset = ({ dispatch }, store) =>
  dispatch("chooseStore", { store: store, type: "reset" });
const show = ({ dispatch, commit }, data) => {
  commit("setMode", data.mode);
  dispatch("chooseStore", { id: data.id, store: data.store, type: SHOW });
};

const chooseStore = ({ dispatch }, data) => {
  const store = data.store;
  const type = data.type;
  const id = data.id ? data.id : 0;
  switch (store) {
    case ARTICLE:
      dispatch(`${store}/${type}`, id);
      break;
    case CATEGORY:
      dispatch(`${store}/${type}`, id);
      break;
    case USER:
      dispatch(`${store}/${type}`, id);
      break;
    default:
      showError(`Internal Server Error ${type} Store`);
  }
};
const mountUrl = ({ commit }, data) => {
  const type = data.type;
  const id = data.id ? data.id : 0;
  const page = data.page ? data.page : 0;
  const api = data.api;
  let result = "";
  switch (type) {
    case POST:
      result = `${BASEAPIURL}/${api}`;
      break;
    case GET:
      result = `${BASEAPIURL}/${api}?page=${page}`;
      break;
    case SHOW:
    case PUT:
    case DELETE:
      result = `${BASEAPIURL}/${api}/${id}`;
      break;
    default:
      result = `${BASEAPIURL}/${api}`;
      break;
  }
  commit("setUrl", result);
};
export default {
  toggleMenu,
  changeArticles,
  index,
  save,
  remove,
  reset,
  show,
  chooseStore,
  mountUrl,
};
