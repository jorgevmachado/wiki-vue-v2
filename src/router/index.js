import Vue from "vue";
import VueRouter from "vue-router";
import { USERKEY } from "@/constants";
Vue.use(VueRouter);
const Home = () =>
  import(/* webpackChunkName: "home" */ "@/pages/home/home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "@/pages/about/about.vue");
const Login = () =>
  import(/* webpackChunkName: "login" */ "@/pages/login/login.vue");
const Admin = () =>
  import(/* webpackChunkName: "admin" */ "@/pages/admin/admin.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { requiresAdmin: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(USERKEY);
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    const user = JSON.parse(json);
    user && user.user.admin ? next() : next({ path: "/" });
  } else {
    next();
  }
});

export default router;
