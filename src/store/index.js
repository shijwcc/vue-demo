/*
* 如果不是大型单页应用，使用vuex可能是冗余的
* Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
* 它采用集中式存储管理应用的所有组件的状态，
* 并以相应的规则保证状态以一种可预测的方式发生变化。
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
