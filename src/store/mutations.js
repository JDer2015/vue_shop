import Vue from 'vue'
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


export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },

  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },

  [RECEIVE_USER](state,{user}){
    state.user = user
  },

  [RESET_USER](state){
    state.user = {}
  },

  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },

  [RECEIVE_INFO](state,{info}){
    state.info = info
  },

  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },

  [ADD_COUNT](state,{food}){
    if(!food.count){
      Vue.set( food, 'count', 0 )
      state.cartFoods.push(food)
    }
    food.count++
  },

  [DEL_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

  [CLEAR_CART](state){
    state.cartFoods.forEach(item => {
      item.count = 0
    })
    state.cartFoods = []
  }
}
