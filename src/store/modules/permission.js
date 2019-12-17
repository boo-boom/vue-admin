import { asyncRoutes, constantRoutes } from "@/router";

/**
 * 判断当前路由权限是否与用户匹配
 * @param {array} roles 当前用户的权限
 * @param {object} route 路由对象
 */
export function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * 筛选匹配用户权限的路由表
 * @param {array} routes 需要权限动态配置的路由
 * @param {array} roles 当前用户的权限
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const temp = { ...route };
    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, roles);
      }
      res.push(temp);
    }
  });
  return res;
}

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes;
    state.addRoutes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      if (roles.includes("admin")) {
        // 如果是admin则添加全部路由
        accessedRoutes = asyncRoutes || [];
      } else {
        // 根据roles匹配符合权限的路由
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
