<template>
  <div>
    <el-button @click="test">测试选中订单管理</el-button>
    <el-button @click="test1">测试选中消息中心</el-button>
    <el-menu
      :default-active="activeIndex"
      :active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  watch: {
    activeIndex: {
      handler: function (newVal) {
        console.log(newVal)
      },
      immediate: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
    },
    test1 () {
      console.log('消息中心')
      this.activeIndex = '3'
    },
    test () {
      console.log('订单管理')
      this.activeIndex = '4'
    }
  }
}
</script>

<style scoped>

</style>
