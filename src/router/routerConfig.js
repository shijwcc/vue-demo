import HelloWorld from '@/components/HelloWorld'
import testA from '@/components/testA'

const routerConfig = [
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

export default routerConfig
