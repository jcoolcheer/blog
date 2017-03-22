import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const vuexa = new Vuex.Store({
  state: {
    count: 0,
    titles: []
  },
  mutations: {
    addTitle: (state, title) => {
      if (Array.isArray(title)) {
        state.titles = state.titles.concat(title)
      } else {
        state.titles.unshift(title)
      }
    },
    clearTitle: (state) => {
      state.titles = []
    }
  }
})
export default vuexa
