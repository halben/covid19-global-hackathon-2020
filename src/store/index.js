import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createUser } from '@/services/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: null
  },
  mutations: {
    'IS_LOGIN_STATE': (state, data) => state.isAuth = data
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    'CREATE_USER': async ({ commit, dispatch }, data) => {
      try {
        await createUser(data)
        commit('IS_LOGIN_STATE', true)
      } catch(err) {
        throw new Error(err.message)
      }
    }
  },
  getters: {
    isAuth: state => state.isAuth
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
