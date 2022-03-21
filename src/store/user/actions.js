import { BASEAPIURL, showError, USERKEY } from "@/constants";
import router from "@/router";
import axios from "axios";
const validateToken = async ({ commit }) => {
  commit("setValidatingToken", true);
  const json = localStorage.getItem(USERKEY);
  const userData = JSON.parse(json);
  commit("setUser", null);
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
        commit("setUser", userData);
        if (this.$mq === "xs" || this.$mq === "sm") {
          commit("toggleMenu", false);
        }
      }
    })
    .catch(() => {
      console.log(`x`);
      // localStorage.removeItem(USERKEY);
      // router.push({ name: "login" });
    });
  commit("setValidatingToken", false);
};
const login = async ({ commit }, body) => {
  axios
    .post(`${BASEAPIURL}/users/login`, body)
    .then((res) => {
      commit("setUser", res.data);
      localStorage.setItem(USERKEY, JSON.stringify(res.data));
      router.push({ path: "/" });
    })
    .catch(showError);
};
const logout = async ({ commit }) => {
  localStorage.removeItem(USERKEY);
  commit("setUser", null);
  await router.push({ path: "login" });
};
export default {
  validateToken,
  login,
  logout,
};
