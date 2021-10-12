import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from "./info"
import category from './category'
import record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state,error){
      state.error = error
    },
    clerError(state){
      state.error = null
    }
  },
  actions:{
   async fetchCurrency(){
     const key = process.env.VUE_APP_FIXER
     const res = await fetch(`https://data.fixer.io/api/latest?access_key=${key}&symbol=USD,EUR,RUB`)
     return await res.json()
   }
  },
  getters:{
    error: s => s.error
  },
  modules: {
    auth,info,category,record
  }
})
