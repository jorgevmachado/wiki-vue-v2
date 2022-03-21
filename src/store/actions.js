import { ARTICLE, CATEGORY, showError, USER } from "@/constants";
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
const show = ({ dispatch }, store) =>
  dispatch("chooseStore", { store: store, type: "show" });

const chooseStore = ({ dispatch }, value) => {
  const store = value.store;
  const type = value.type;
  switch (store) {
    case ARTICLE:
      dispatch(`${store}/${type}`);
      break;
    case CATEGORY:
      dispatch(`${store}/${type}`);
      break;
    case USER:
      dispatch(`${store}/${type}`);
      break;
    default:
      showError(`Internal Server Error ${type} Store`);
  }
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
};
