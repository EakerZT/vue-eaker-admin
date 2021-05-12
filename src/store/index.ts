import { createStore } from 'vuex'

interface State {
  menuCollapsed:boolean
}

export default createStore<State>({
  state: {
    menuCollapsed: false
  },
  mutations: {
    foldMenu (state) {
      state.menuCollapsed = true
    },
    unfoldMenu (state) {
      state.menuCollapsed = false
    }
  },
  actions: {
  },
  modules: {
  }
})
