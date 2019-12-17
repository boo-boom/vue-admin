import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    meta: { title: "登录", icon: "dashboard" },
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/401",
    meta: { title: "401", icon: "dashboard" },
    component: () => import("@/views/error-page/401")
  },
  {
    path: "/404",
    meta: { title: "404", icon: "dashboard" },
    component: () => import("@/views/error-page/404")
  },
  { path: "*", redirect: "/404" }
];

export const asyncRoutes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        meta: { title: "首页", icon: "dashboard", roles: ["admin", "editor"] },
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "/test",
    redirect: "/test/about",
    component: Layout,
    children: [
      {
        path: "about",
        name: "about",
        meta: { title: "关于", icon: "dashboard", roles: ["editor"] },
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  },
  {
    path: "/testPage",
    name: "testPage",
    meta: { title: "测试", icon: "dashboard", roles: ["admin"] },
    component: () => import(/* webpackChunkName: "testPage" */ "../views/TestPage.vue")
  }
];

const createRouter = () =>
  new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: constantRoutes,
    scrollBehavior: () => ({ y: 0 })
  });

const router = createRouter();

export default router;
