import Vue from "vue";
import "font-awesome/css/font-awesome.css";
import "./plugins/bootstrap-vue";
import app from "./app/app.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount("#app");
