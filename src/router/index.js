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
  }
];

export const asyncRoutes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "关于111", icon: "message" },
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "首页", roles: ["admin", "editor"] },
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "/test",
    redirect: "/test/about",
    component: Layout,
    meta: { title: "关于222", icon: "message" },
    children: [
      {
        path: "/test/about",
        name: "about",
        meta: { title: "关于", roles: ["editor"] },
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/test/test",
        name: "test",
        meta: { title: "测试test", roles: ["editor"] },
        component: () => import(/* webpackChunkName: "testPage" */ "../views/TestPage.vue")
      }
    ]
  },
  {
    path: "/testPage",
    name: "testPage",
    meta: { title: "测试", icon: "message", roles: ["admin"] },
    component: () => import(/* webpackChunkName: "testPage" */ "../views/TestPage.vue")
  },
  { path: "*", redirect: "/404" }
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
