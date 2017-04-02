import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const vuexa = new Vuex.Store({
  state: {
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
    },
    deleteTitle: (state, i) => {
      state.titles.splice(i, 1)
    }
  }
})
export default vuexa
