const state = {
  roles: []
};

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  getInfo({ commit }) {
    const data = {
      roles: ["editor"]
    };
    return new Promise(resolve => {
      commit("SET_ROLES", data.roles);
      resolve(data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
