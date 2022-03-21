import Vue from "vue";
export const USERKEY = "__wiki_user";
export const BASEAPIURL = "http://localhost:3333";
export const ARTICLE = "article";
export const CATEGORY = "category";
export const USER = "user";
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

export default { BASEAPIURL, USERKEY, showError, showSuccess };
