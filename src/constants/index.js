import Vue from "vue";
export const USERKEY = "__wiki_user";
export const BASEAPIURL = "http://localhost:3333";
export const API_ARTICLE = "articles";
export const ARTICLE = "article";
export const API_CATEGORY = "categories";
export const CATEGORY = "category";
export const API_USER = "users";
export const USER = "user";
export const POST = "post";
export const GET = "get";
export const DELETE = "delete";
export const PUT = "put";
export const SHOW = "show";
export function showError(e) {
  if (e && e.response && e.response.data) {
    Vue.toasted.global.defaultError({ msg: e.response.data.message });
  } else if (typeof e === "string") {
    Vue.toasted.global.defaultError({ msg: e });
  } else {
    Vue.toasted.global.defaultError();
  }
}

export function showSuccess() {
  Vue.toasted.global.defaultSuccess();
}

export default {
  BASEAPIURL,
  USERKEY,
  API_ARTICLE,
  API_CATEGORY,
  API_USER,
  POST,
  PUT,
  DELETE,
  GET,
  SHOW,
  showError,
  showSuccess,
};
