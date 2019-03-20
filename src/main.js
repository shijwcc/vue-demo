// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

/* 引入 api 文件 */
import api from './api'
/* 引入 公共方法 文件 */
import utils from './utils'

/* 阻止vue在启动时生成生产提示 */
Vue.config.productionTip = false

/* 将api 方法绑定到全局 */
Vue.prototype.$api = api
Vue.prototype.$utils = utils

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },

  template: '<App/>'
})
