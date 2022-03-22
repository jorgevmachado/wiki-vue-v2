import { DELETE, GET, POST, PUT, showError, showSuccess } from "@/constants";
import axios from "axios";

const index = ({ commit, dispatch, state, rootGetters }) => {
  const method = GET;
  dispatch(
    "mountUrl",
    { api: state.api, type: method, page: state.page },
    { root: true }
  );
  axios[method](rootGetters.url).then((res) => {
    commit("setArticles", res.data.data);
    commit("setCount", res.data.total, { root: true });
    commit("setLimit", res.data.per_page, { root: true });
  });
};
const show = ({ commit, dispatch, rootGetters, state }, id) => {
  const method = GET;
  id = id !== undefined ? id : 0;
  dispatch(
    "mountUrl",
    { api: state.api, type: "show", id: id },
    { root: true }
  );
  axios[method](rootGetters.url)
    .then((res) => {
      const article = res.data;
      article.category_id = article.category.id;
      commit("setArticle", article);
    })
    .catch(showError);
};
const remove = ({ dispatch, state, rootGetters }, id) => {
  const method = DELETE;
  id = id === 0 ? state.article.id : id;
  dispatch(
    "mountUrl",
    { id: id, api: state.api, type: method },
    { root: true }
  );
  axios[method](rootGetters.url)
    .then(() => {
      showSuccess();
      dispatch("reset");
    })
    .catch(showError);
};
const reset = ({ commit, dispatch }) => {
  commit("setMode", "save", { root: true });
  commit("setArticle", {});
  dispatch("index");
};
const save = ({ state, dispatch, rootGetters }) => {
  const method = state.article.id ? PUT : POST;
  const data =
    method === POST
      ? { api: state.api, type: method }
      : { id: state.article.id, api: state.api, type: method };
  dispatch("mountUrl", data, { root: true });
  const article = {
    name: state.article.name,
    description: state.article.description,
    category_id: state.article.category_id,
    content: state.article.content,
  };
  if (state.article.image_url) {
    article.image_url = state.article.image_url;
  }
  axios[method](rootGetters.url, article)
    .then(() => {
      showSuccess();
      dispatch("reset");
    })
    .catch(showError);
};
export default {
  index,
  show,
  remove,
  reset,
  save,
};
