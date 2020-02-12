<template>
  <div class="wraper">
    <Layout></Layout>
  </div>
</template>

<script lang='ts'>
import Layout from '@/components/general/Layout.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Layout
  }
})
export default class Index extends Vue {
  // prop
  @Prop({
    required: false,
    default: ''
  }) name!: string
  created () {
    
  }
  mounted () {
    
  }
}
</script>
<style lang='scss' scoped>
  .wraper{
    height: 100%;
  }
</style>