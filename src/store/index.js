import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {createUser, getAllBus, getBusById, getUser, searchQuery, updateBus, updateUser} from '@/services/index'

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
    'UPDATE_USER': async ({ commit, dispatch }, data) => {
      try {
        await updateUser(data)
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
    },
    // eslint-disable-next-line no-unused-vars
    'GET_ALL_BUS': async ({ commit, dispatch }) => {
      try {
        return await getAllBus()
      } catch (err) {
        throw new Error(err.message)
      }
    },
    // eslint-disable-next-line no-unused-vars
    'GET_BUS': async ({ commit, dispatch }, busId) => {
      try {
        return await getBusById(busId)
      } catch(err) {
        throw new Error(err.message)
      }
    },
    // eslint-disable-next-line no-unused-vars
    'UPDATE_USER_BUS': async ({ commit, dispatch }, data) => {
      try {
        return await updateBus(data)
      } catch (err) {
        throw new Error(err.message)
      }
    },
    // eslint-disable-next-line no-unused-vars
    'SEARCH': async ({ commit, dispatch }, val) => {
      try {
        return await searchQuery(val)
      } catch(err) {
        throw new Error('Unable to search')
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
