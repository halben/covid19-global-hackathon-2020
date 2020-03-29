import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {createUser, getUser} from '@/services/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: null,
    user: null
  },
  mutations: {
    'IS_LOGIN_STATE': (state, data) => state.isAuth = data,
    'SET_USER': (state, data) => state.user = data
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    'LOG_OUT': ({ commit, dispatch }) => {
      commit('IS_LOGIN_STATE', false)
      window.localStorage.removeItem('vuex')
    },
    // eslint-disable-next-line no-unused-vars
    'CREATE_USER': async ({ commit, dispatch }, data) => {
      try {
        await createUser(data)
        commit('IS_LOGIN_STATE', true)
      } catch(err) {
        throw new Error(err.message)
      }
    },
    // eslint-disable-next-line no-unused-vars
    'GET_USER': async ({ commit, dispatch }, email) => {
      try {
        const user = await getUser(email)
        commit('SET_USER', user)
      } catch(err) {
        throw new Error(err.message)
      }
    }
  },
  getters: {
    isAuth: state => state.isAuth,
    user: state => state.user
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
