import Vue from "vue";
import Vuex from "vuex";
import getters from "@/store/getters";
import actions from "@/store/actions";
import user from "@/store/user";
import stat from "@/store/stat";
import category from "@/store/category";
import article from "@/store/article";
import {
  setCount,
  setLimit,
  setLoadMore,
  setMenu,
  setMode,
  setpage,
} from "@/store/mutations";
Vue.use(Vuex);

const createStore = () =>
  new Vuex.Store({
    state: () => ({
      isMenuVisible: false,
      page: 1,
      limit: 0,
      count: 0,
      mode: "save",
      loadMore: true,
    }),
    mutations: {
      setMenu,
      setpage,
      setMode,
      setLimit,
      setCount,
      setLoadMore,
    },
    getters,
    actions,
    modules: {
      user,
      stat,
      category,
      article,
    },
  });
export default createStore;
