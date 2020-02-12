<template>
  <div>
    <p>{{msg}}</p>
    <p>{{name}}</p>
    <button @click="change">改变</button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {

  },
  filters: {

  },
  directives: {

  }
})
export default class Test extends Vue {
  // prop
  @Prop({
    required: true,
    default: ''
  }) name!: string
  @Watch('person', {

  })
  private msg: string = "777777"
  change (): void {
    this.msg = "8888"
  }
  created () {
    
  }
  mounted () {
    
  }
}
</script>
<style lang='scss' scoped>
  
</style>