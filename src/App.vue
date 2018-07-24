<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/footerGuide/FooterGuide.vue'
  export default {
    mounted(){
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
