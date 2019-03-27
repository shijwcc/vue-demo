<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="childSay">调用父级方法测试</button>
    <!--<slot></slot>-->
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
  .hello {
    margin-bottom: 20px;
    border: 1px solid red;
  }
</style>
