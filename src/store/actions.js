import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_COUNT,
  DEL_COUNT,
  CLEAR_CART
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from "../api/index";


export default {
  async getAddress({commit,state}){
    const {latitude,longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)
    if(result.code === 0){
      commit(RECEIVE_ADDRESS,{address:result.data})
    }
  },

  async getCategorys({commit}){
    const result = await reqCategorys()
    if(result.code === 0){
      commit(RECEIVE_CATEGORYS,{categorys:result.data})
    }
  },

  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops(latitude,longitude)
    if(result.code === 0){
      commit(RECEIVE_SHOPS,{shops:result.data})
    }
  },

  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },

  //异步获取用户信息实现自动登录
  async getUser({commit}){
    const result = await reqUser()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },

  //退出登录
  async logout({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER)
    }
  },

  //异步获取商家菜单列表
  async getShopGoods({commit},callback){
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      callback && callback()
    }
  },
  //异步获取商家评论列表
  async getShopRatings({commit},callback){
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      callback && callback()
    }
  },
  //异步获取商家信息列表
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },

  updateCount({commit},{isAdd,food}){
    if(isAdd){
      commit(ADD_COUNT,{food})
    }else{
      commit(DEL_COUNT,{food})
    }
  },

  clearCart({commit}){
    commit(CLEAR_CART)
  }
}
