import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count: 1,
  },
  mutations: {
    inc(state, data) {
      ++state.count
    }
  },
  actions: {
  },
  modules: {
  }
});
