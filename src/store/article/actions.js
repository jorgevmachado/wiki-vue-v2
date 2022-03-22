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
const show = async ({ commit, dispatch, state, rootGetters }, data) => {
  const method = GET;
  const id = data.data.id !== undefined ? data.data.id : 0;
  dispatch(
    "mountUrl",
    { api: state.api, type: "show", id: id },
    { root: true }
  );
  axios[method](rootGetters.url)
    .then((res) => {
      const data = res.data;
      data.category_id = data.category.id;
      commit("setArticle", data);
    })
    .catch(showError);
};
const remove = async ({ dispatch, state, rootGetters }, data) => {
  const method = DELETE;
  const id = data.id ? data.id : state.article.id;

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
const save = ({ dispatch, state, rootGetters }) => {
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
