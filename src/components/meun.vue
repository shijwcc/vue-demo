<template>
  <div>
    <div class="logo">
      <img src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png" width="40">
      <span class="site-name">menu test</span>
    </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
    >
      <template v-for="item in asideMenuConfig">
        <router-link v-if="!item.children" :to="item.path" :key="item.name">
          <el-menu-item :index="item.path">
            <i v-if="item.icon" :class="item.icon"></i>
            <span v-if="item.name" slot="title">{{item.name}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :index="item.name || item.path" :key="item.name">
          <template slot="title">
            <i v-if="item && item.icon" :class="item.icon"></i>
            <span v-if="item && item.name" slot="title">{{item.name}}</span>
          </template>
          <template v-for="child in item.children" v-if="!child.hidden">
            <router-link :to="item.path + child.path" :key="child.name">
              <el-menu-item :index="item.path + child.path">
                <span v-if="child && child.name" slot="title">{{child.name}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>

      </template>
    </el-menu>
  </div>
</template>

<script>
import { asideMenuConfig } from '../router/menuConfig'
export default {
  name: 'SideBar',
  props: {},
  data () {
    return {
      asideMenuConfig
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
