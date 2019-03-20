import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import testA from '@/components/testA'

// import routerConfig from './routerConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testA',
      name: 'testA',
      component: testA
    }
  ]
})
// export default new Router({
//   routes: routerConfig
// })
