import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      clothing: [],
      profile: {
          image_url: "https://i.imgur.com/6jORIPn.jpg",
          first_name: "Tony",
          last_name: "Xin"
      }
  },
  mutations: {
      setClothing(state, clothing) {
          state.clothing = clothing
      },
      setProfile(state, profile) {
        state.profile = profile
      },
  },
  actions: {
  },
  modules: {
  }
})
