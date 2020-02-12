<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Test :name="4546"></Test>
    <el-button type="primary">TEST</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/views/Test.vue'

import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component({
  components: {
    Test
  }
})
export default class Home extends Vue{
  
}
</script>
