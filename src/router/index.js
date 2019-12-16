import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: { title: "首页", icon: "dashboard", roles: ["admin", "editor"] }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: asyncRoutes,
  scrollBehavior: () => ({ y: 0 })
});

export default router;
