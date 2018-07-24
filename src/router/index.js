import Vue from 'vue'
import VueRouter from 'vue-router'

// import Msite from '../pages/msite/Msite.vue'
// import Order from '../pages/order/Order.vue'
// import Search from '../pages/search/Search.vue'
// import Profile from '../pages/profile/Profile.vue'

const Msite = () => import('../pages/msite/Msite.vue')
const Order = () => import('../pages/order/Order.vue')
const Search = () => import('../pages/search/Search.vue')
const Profile = () => import('../pages/profile/Profile.vue')

import Login from '../pages/login/Login.vue'
import Shop from '../pages/shop/Shop.vue'
import ShopRatings from '../pages/shop/shopRatings/ShopRatings.vue'
import ShopInfo from '../pages/shop/shopInfo/ShopInfo.vue'
import ShopGoods from '../pages/shop/shopGoods/ShopGoods.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta:{
        isShow:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        isShow:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        isShow:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        isShow:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop',
          redirect:'/shop/goods'
        }
      ]
    },
    {
      path:'/',
      redirect:'/msite'
    }

  ]
})
