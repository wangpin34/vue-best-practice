import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// global initial state
const state = {}

// global getters
const getters = {}

// global actions
const actions = {}

// global mutations
const mutations = {}

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  modules: {
    user
  }
})

export default store
