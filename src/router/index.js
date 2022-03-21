import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () =>
  import(/* webpackChunkName: "home" */ "@/pages/home/home.vue");
const About = () => import(/* webpackChunkName: "about" */ "@/pages/About.vue");
const Login = () =>
  import(/* webpackChunkName: "about" */ "@/pages/login/login.vue");
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
