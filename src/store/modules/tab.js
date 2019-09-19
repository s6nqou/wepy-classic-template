export default {
  namespaced: true,
  state: {
    tabIndex: 0
  },
  mutations: {
    changeTabIndex(state, index) {
      state.tabIndex = index
    }
  },
  actions: {
    changeTabIndex({ commit }, index) {
      commit('changeTabIndex', index)
    }
  }
}
