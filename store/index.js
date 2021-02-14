export const state = () => ({
  backpacks: [],
  tshirts: [],
  shirts: [],
  cart: [],
})
export const mutations = {
  setBackpacks(state, backpacks) {
    state.backpacks.push(backpacks)
  },
  setShirts(state, shirts) {
    state.shirts.push(shirts)
  },
  setTshirts(state, tshirts) {
    state.tshirts.push(tshirts)
  },
  setProductsToCart(state, product) {
    state.cart.push(product)
  },
  deleteItemFromCart(state, item) {
    state.cart.splice(item, 1)
  },
}

export const actions = {
  async getBackpacks(context) {
    const response = await fetch(`http://localhost:3000/backpacks`)
    if (response.ok) {
      const backpacks = await response.json()
      context.commit('setBackpacks', backpacks)
    }
    throw new Error(response.status)
  },
  async getShirts(context) {
    const response = await fetch(`http://localhost:3000/shirts`)
    if (response.ok) {
      const shirts = await response.json()
      context.commit('setShirts', shirts)
    }
    throw new Error(response.status)
  },
  async getTshirts(context) {
    const response = await fetch(`http://localhost:3000/tshirts`)
    if (response.ok) {
      const tshirts = await response.json()
      context.commit('setTshirts', tshirts)
    }
    throw new Error(response.status)
  },
  addToCartState({ commit }, product) {
    commit('setProductsToCart', product)
  },
  removeItemFromState({ commit }, item) {
    commit('deleteItemFromCart', item)
  },
}
export const getters = {
  cart(state) {
    return state.cart
  },
}
