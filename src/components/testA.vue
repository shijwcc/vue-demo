<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="childSay">调用父级方法测试</button>
  </div>
</template>

<script>
export default {
  name: 'testA',
  components: {

  },
  data () {
    return {
      msg: 'components test'
    }
  },
  methods: {
    childSay () {
      this.$emit('fatherSay', 'im child')
    }
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
