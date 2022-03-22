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
  dispatch("chooseStore", { data: data.data, store: data.store, type: SHOW });
};

const chooseStore = ({ dispatch }, data) => {
  const store = data.store;
  const type = data.type;
  switch (store) {
    case ARTICLE:
      dispatch(`${store}/${type}`, data);
      break;
    case CATEGORY:
      dispatch(`${store}/${type}`, data);
      break;
    case USER:
      dispatch(`${store}/${type}`, data);
      break;
    default:
      showError(`Internal Server Error ${type} Store`);
  }
};
const mountUrl = ({ commit }, data) => {
  const type = data.type;
  const id = data.id ? data.id : 0;
  let page = data.page;

  const api = data.api;
  let result;
  switch (type) {
    case POST:
      result = `${BASEAPIURL}/${api}`;
      break;
    case GET:
      if (page) {
        result = `${BASEAPIURL}/${api}?page=${page}`;
        return;
      }
      result = `${BASEAPIURL}/${api}`;
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
