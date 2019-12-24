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
    redirect: "/dashboard",
    component: Layout,
    meta: { title: "关于111", icon: "message" },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { title: "首页", roles: ["admin", "editor"] },
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "/example",
    redirect: "/example/about",
    component: Layout,
    meta: { title: "Example", icon: "message", roles: ["editor"] },
    children: [
      {
        path: "about",
        name: "About",
        meta: { title: "关于", roles: ["editor"] },
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        hidden: true,
        path: "test",
        name: "Test",
        meta: { title: "测试test", roles: ["editor"] },
        component: () => import(/* webpackChunkName: "testPage" */ "../views/TestPage.vue")
      }
    ]
  },
  {
    path: "/testPage",
    name: "TestPage",
    meta: { title: "测试", icon: "message", roles: ["admin"] },
    component: () => import(/* webpackChunkName: "testPage" */ "../views/TestPage.vue")
  },
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: constantRoutes,
    scrollBehavior: () => ({ y: 0 })
  });

const router = createRouter();
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
