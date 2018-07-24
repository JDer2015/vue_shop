export default {
  totalCount(state){
    return state.cartFoods.reduce((pretotal,item) => pretotal + item.count,0)
  },

  totalPrice(state){
    return state.cartFoods.reduce((pretotal,item) => pretotal + item.count * item.price,0)
  }
}
