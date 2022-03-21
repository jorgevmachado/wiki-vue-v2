import Vue from "vue";
import "font-awesome/css/font-awesome.css";
import "./plugins/bootstrap-vue";
import "./plugins/toasted-vue";
import "./plugins/mq-vue";
import "./plugins/messages";
import "./config/axios/index";
import app from "./app/app.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount("#app");
