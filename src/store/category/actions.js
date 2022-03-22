import axios from "axios";
import { DELETE, GET, POST, PUT, showError, showSuccess } from "@/constants";

const treeData = async ({ dispatch, state, rootGetters }) => {
  const method = GET;
  dispatch(
    "mountUrl",
    { api: state.api, type: method, page: null },
    { root: true }
  );
  return await axios[method](`${rootGetters.url}/tree`)
    .then((res) => res.data)
    .catch(showError);
};

const index = async ({ commit, dispatch, state, rootGetters }) => {
  const method = GET;
  dispatch(
    "mountUrl",
    { api: state.api, type: method, page: state.page },
    { root: true }
  );
  axios[method](rootGetters.url)
    .then((res) => {
      let categories = res.data.data.map((category) => {
        return {
          ...category,
          value: category.id,
          text: category.path,
          parentId: category.parent_id,
        };
      });
      commit("setCategories", categories);
      commit("setCount", res.data.total, { root: true });
      commit("setLimit", res.data.per_page, { root: true });
    })
    .catch(showError);
};

const show = async ({ commit, dispatch, state, rootGetters }, data) => {
  const method = GET;
  const id = data.data.id !== undefined ? data.data.id : 0;
  const path = data.data.path;
  dispatch(
    "mountUrl",
    { api: state.api, type: "show", id: id },
    { root: true }
  );
  axios[method](rootGetters.url)
    .then((res) => {
      const data = res.data;
      data.parentId = res.data.parent_id;
      data.path = path;
      commit("setCategory", data);
    })
    .catch(showError);
};

const remove = async ({ dispatch, state, rootGetters }, data) => {
  const method = DELETE;
  const id = data.id ? data.data.id : state.category.id;
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
  commit("setCategory", {});
  dispatch("index");
};
const save = async ({ dispatch, state, rootGetters }) => {
  const method = state.category.id ? PUT : POST;
  const data =
    method === POST
      ? { api: state.api, type: method }
      : { id: state.category.id, api: state.api, type: method };
  dispatch("mountUrl", data, { root: true });
  const category = {
    name: state.category.name,
  };
  if (state.category.parentId) {
    category.parentId = state.category.parentId;
  }
  axios[method](rootGetters.url, category)
    .then(() => {
      showSuccess();
      dispatch("reset");
    })
    .catch(showError);
};
export default {
  treeData,
  index,
  show,
  remove,
  reset,
  save,
};
