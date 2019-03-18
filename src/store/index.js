/*
* 如果不是大型单页应用，使用vuex可能是冗余的
* */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  baseUrl: 'http://192.168.0.155:8888',
  proxyUrl: '/jiawen',
  count: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
