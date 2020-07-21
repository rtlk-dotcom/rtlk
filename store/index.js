export const state = () => ({
  menu: {},
  cart: {}
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_CART(state, product) {
    state.cart.push(product)
  },
  SET_ERROR(state, error) {
    state.menu = error
  }
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (await $prismic.api.getSingle('menu')).data

      commit('SET_MENU', menu)
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error);
    }
  },
  async updateCart({ commit }, product) {
    try {
      commit('SET_MENU', product
      )
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error);
    }
  }
}
