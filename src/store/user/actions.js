import {
  BASEAPIURL,
  DELETE,
  GET,
  POST,
  PUT,
  showError,
  showSuccess,
  USERKEY,
} from "@/constants";
import router from "@/router";
import axios from "axios";
const validateToken = async ({ commit }) => {
  commit("setValidatingToken", true);
  const json = localStorage.getItem(USERKEY);
  const userData = JSON.parse(json);
  commit("setSuperUser", null);
  if (!userData) {
    commit("setValidatingToken", false);
    await router.push({ name: "login" });
    return;
  }
  await axios
    .get(`${BASEAPIURL}/users/validate-token`, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
    .then((res) => {
      if (res.data) {
        commit("setSuperUser", userData);
      }
    })
    .catch(() => {
      localStorage.removeItem(USERKEY);
      router.push({ name: "login" });
    });
  commit("setValidatingToken", false);
};
const login = async ({ commit }, body) => {
  axios
    .post(`${BASEAPIURL}/users/login`, body)
    .then((res) => {
      commit("setSuperUser", res.data);
      localStorage.setItem(USERKEY, JSON.stringify(res.data));
      router.push({ path: "/" });
    })
    .catch(showError);
};
const logout = async ({ commit }) => {
  localStorage.removeItem(USERKEY);
  commit("setSuperUser", null);
  await router.push({ path: "login" });
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
      commit("setUsers", res.data.data);
      commit("setCount", res.data.total, { root: true });
      commit("setLimit", res.data.per_page, { root: true });
    })
    .catch(showError);
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
    .then((res) => commit("setUser", res.data))
    .catch(showError);
};
const remove = async ({ dispatch, state, rootGetters }, data) => {
  const method = DELETE;
  const id = data.id ? data.data.id : state.user.id;
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
  commit("setUser", {});
  dispatch("index");
};
const save = async ({ dispatch, state, rootGetters }) => {
  if (state.user.id === undefined) {
    if (state.user.password === undefined) {
      showError("Campo senha é de preenchimento obrigatório.");
      return;
    }
    if (state.user.confirmPassword === undefined) {
      showError("Campo Confirmação de senha é de preenchimento obrigatório.");
      return;
    }
    if (state.user.password !== state.user.confirmPassword) {
      showError("Senha diferente de confirmação de senha");
      return;
    }
  }
  const user = {
    name: state.user.name,
    email: state.user.email,
    password: state.user.email,
    admin: state.user.admin,
  };
  const method = state.user.id ? PUT : POST;

  const data =
    method === POST
      ? { api: state.api, type: method }
      : { id: state.user.id, api: state.api, type: method };
  dispatch("mountUrl", data, { root: true });
  axios[method](rootGetters.url, user)
    .then(() => {
      showSuccess();
      dispatch("reset");
    })
    .catch(showError);
};
export default {
  validateToken,
  login,
  logout,
  index,
  show,
  remove,
  reset,
  save,
};
