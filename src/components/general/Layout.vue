<template>
  <div class="layout_container">
    <div class="header">
      <div class="menu_wrap">
        <router-link to="/home">home</router-link> | 
        <router-link to="/about">about</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  created () {
    
  }
  mounted () {
    
  }
}
</script>
<style lang='scss' scoped>
  .layout_container{
    height: 100%;

  }
</style>