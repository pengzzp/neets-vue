import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
// --------------------------------------------------
  state: {
    navlist:[]
  },
// --------------------------------------------------
  mutations: {
    set_navlist(state,payload){
        state.navlist=payload
    }
  },
// --------------------------------------------------
  actions: {
    get_navlist({commit}){
        $.get('/api/video/allCategories')
        .then((result)=>{
            commit('set_navlist',JSON.parse(result.data.data))
        })
    }
  }
})
