import Vue from 'vue'
import Vuex from 'vuex'
import { StoreState } from './types'
import { membersModule } from './modules/members'

Vue.use(Vuex)

export default new Vuex.Store<StoreState>({
  state: {
    title: 'Welcome to the Front End Developer Test'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  　members: membersModule
  }
})
