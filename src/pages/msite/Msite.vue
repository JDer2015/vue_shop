<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <router-link class="header_login" slot="right" to="login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="imgBaseUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src="./img/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/headerTop/HeaderTop.vue'
  import ShopList from '../../components/shopList/ShopList.vue'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys')
    },
    computed:{
      ...mapState(['address','categorys']),
      categorysArr(){
        //不可以直接截取categorys，这样会修改里面的值导致截取完成之后categorys的长度为0
        let arr = []
        let arr1 = []
        this.$store.state.categorys.forEach((item => {
          arr1.push(item)
        }))
        while(arr1.length>0){
          arr.push(arr1.splice(0,8))
        }
        return arr
      }
//      categorysArr () {
//        const {categorys} = this
//        const arr = []
//        let smallArr = []
//        categorys.forEach(c => {
//          // 将全新的小数组保存到大数组中
//          if(smallArr.length===0) {
//            arr.push(smallArr)
//          }
//
//          // 将当前分类保存到小数组
//          smallArr.push(c)
//
//          // 如果刚好满了, 为后面创建一个新的小数组
//          if(smallArr.length===8) {
//            smallArr = []
//          }
//        })
//        return arr
//      }
    },
    watch:{
      categorys(val){
        this.$nextTick(() => {
         new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
            }
          })
        })
      }
    },
    components:{
      HeaderTop,ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
