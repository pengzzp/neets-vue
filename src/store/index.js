import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
// --------------------------------------------------
  state: {
    navlist:[],//分类页导航数据
    defaultlist:[]//列表组件默认数据
  },
// --------------------------------------------------
  mutations: {
    set_navlist(state,payload){
        state.navlist=payload
    },
    set_defaultlist(state,payload){
      state.defaultlist=payload
    }
  },
// --------------------------------------------------
  actions: {
    get_navlist({commit}){
        $.get('/api/video/allCategories')
        .then((result)=>{
            commit('set_navlist',JSON.parse(result.data.data))
        })
    },
    get_defaultlist({commit}){
      $.get('/api/video/searchByES',{
        params:{
            pageSize: 10,
            pageNo: 1,
            state:'',
            type:'',
            country:'',
            week:'',
            year:'',
            order:'1'
        }
      })
      .then((result)=>{
          if(result.data.message=="获取记录成功"){
            result.data.data.list.forEach(function(item){
               item.photos=JSON.parse(item.photos)
            });
            commit('set_defaultlist',result.data.data.list)
        }
      })
    },
  }
})
