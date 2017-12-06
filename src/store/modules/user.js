import * as types from '../mutation-types'

const state = {
  name: 'wangpin',
  age: 101,
  gender: 'male'
}

const mutations = {
  [types.UPDATE_USER] (state, { user }) {
    state = { ...user }
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
