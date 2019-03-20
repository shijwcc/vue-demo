<template>
  <div class="hello">
    <h1>{{ aDouble }}</h1>
    <h1>{{ tableData }}asdasdasd</h1>
    <h1>{{ msg | filterA}}</h1>
    <h1>{{ asd | filterA}}</h1>
    <h1>{{ time }}</h1>
    <test-a @fatherSay="sayHi"></test-a>
    <button @click="test1">接口测试--直接调用</button>
    <button @click="test2">接口测试--公共调用</button>
    <button @click="test3">接口测试--删除示例</button>
    <button @click="test4">路由跳转</button>
    <button @click="test5">mutations测试</button>
    <button @click="test6">全局方法utils测试</button>
  </div>
</template>

<script>
import testA from './testA'
import { getTableData, delTableData } from '../api/tableData'

export default {
  name: 'HelloWorld',
  components: {
    'test-a': testA
  },
  data () {
    return {
      msg: 'Welcome ',
      tableData: [],
      asd: 'dididi ',
      a: '',
      b: {
        a: ''
      },
      c: '',
      time: '2000-1-1'
    }
  },
  // props: ['father'],
  // props: {
  //   propA: String,
  //   propB: [String, Number],
  //   propC: {
  //     type: String,
  //     default: function () {
  //       return { message: 'hello' }
  //     }
  //   },
  //   propD: {
  //     type: Number,
  //     default: 0,
  //     required: true,
  //     validator: function (value) {
  //       /* 自定义验证规则 */
  //       return value >= 0
  //     }
  //   }
  // },
  computed: {
    aDouble: function () {
      return this.msg + ' computed test'
    }
  },
  filters: {
    filterA: function (val) {
      return val.toUpperCase() + `\n filter test`
    }
  },
  watch: {
    msg: function (val, oldVal) { /* do sth */ },
    a: {
      handler: function (val, oldVal) { /* do sth */ },
      immediate: true/* handler回调函数会在watch开始之后立即被调用 eg：初始化的参数请求数据被赋值 */
    },
    b: {
      handler: function (val, oldVal) { /* do sth */ },
      deep: true/* 深度监听 消耗资源 浪费性能 */
    },
    'b.a': function (val, oldVal) { /* 与上面方法效果一致 节约性能 */ }
    /* 在watcher函数中 不能使用箭头函数 因为箭头函数的this绑定父级作用域的上下文 所以不会按照期望指向 Vue实例 */
  },
  methods: {
    /* 做分类 接口类 方法类 组件方法类 */
    /* api */
    test3 () {
      delTableData('/test3', {id: 'idididid'}).then(res => { this.$message('删除成功') })/* 使用后台返回信息 */
    },
    test2 () {
      getTableData('/test2').then(res => { this.tableData = res.data })
    },
    test1 () {
      this.$api.post('/test1').then(res => { this.msg = res.data })
    },
    /* doing */
    test6 () {
      this.time = this.$utils.formatTime(this.time)
    },
    test4 () {
      this.$router.push('testA')
    },
    test5 () {
      this.$store.commit('add')
      // this.$store.commit('add', 10)
      // this.$store.commit('add', {
      //   count: 10
      // })
      // this.$store.commit({
      //   type: 'add',
      //   count: 10
      // })
      console.log(this.$store.state.count, 'this is count')
    },
    sayHi (val) {
      this.$message('Hi!' + val)
    }
  },
  beforeCreate () {
    /* do sth beforeCreate */
    /* 组件实例刚被创建，组件属性计算之前，一些诸如data或methods一类的属性还没有初始化 */
  },
  created () {
    /* do sth created */
    /* 实例创建后：这个阶段已经完成了数据观测(data observer)，属性和方法的运算， watch/event 事件回调。mount挂载阶段还没开始，$el 属性目前不可见，数据并没有在DOM元素上进行渲染，可以获取data属性。 */
    /* 使用bus 跟 debounce某个连续时间内只执行一次 throttle固定时间执行一次 */
  },
  beforeMount () {
    /* do sth beforeMount */
    /* 在挂载开始之前被调用：相关的 render 函数首次被调用。数据还是双花括号，使用虚拟dom的技术，先将位置占住，后面在mounted的时候直接使用 */
  },
  mounted () {
    /* do sth mounted */
    /* el选项的DOM节点 被新创建的 vm.$el 替换，并挂载到实例上去之后调用此生命周期函数。此时实例的数据在DOM节点上进行渲染，通常在这里发起第一次的后端请求。 */
    /* 接口请求一般都在mounted */
  },
  beforeUpdate () {
    /* do sth beforeUpdate */
    /* 数据更新时调用，但不进行DOM重新渲染，在数据更新时DOM没渲染前可以在这个生命函数里进行状态处理，调用次数较少，不用考虑 */
  },
  updated () {
    /* do sth updated */
    /* 这个状态下数据更新并且DOM重新渲染，当这个生命周期函数被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。当实例每次进行数据更新时updated都会执行，会执行很多次 */
  },
  activated () {
    /* do sth activated keep-alive 被激活时调用 */
  },
  deactivated () {
    /* do sth deactivated keep-alive 停用时调用 */
  },
  beforeDestroy () {
    /* do sth beforeDestroy */
  },
  destroyed () {
    /* do sth destroyed */
    /* eg：定时器 */
  },
  errorCaptured () {
    /* do sth errorCaptured 错误捕获 */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
