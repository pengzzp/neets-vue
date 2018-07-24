import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
// --------------------------------------------------
  state: {
    navnow:{
      pageNo: 1,
      state:'',
      type:'',
      country:'',
      week:'',
      year:'',
      order:'1'
    },
    navlist:[],//分类页导航数据
    defaultlist:[],//列表组件默认数据
    recentLists:[//首页和订阅页数据
      {
        id:"EQZK1vYHJkrZ2nRaaPhixN",
        photos:{"small":"http://img.neets.cc/video/EQZK1vYHJkrZ2nRaaPhixN/small.png","large":"http://img.neets.cc/video/EQZK1vYHJkrZ2nRaaPhixN/large.jpg","medium":"http://img.neets.cc/video/EQZK1vYHJkrZ2nRaaPhixN/medium.png"},
        episodesCount:32,
        title:'过来抱抱我',
        state:1,
        showButton:0
      },
      {
        id:"LHAhVjNbr8GicDsPn9Z1Er",
        photos:{"small":"http://img.neets.cc/video/LHAhVjNbr8GicDsPn9Z1Er/small.jpg","large":"http://img.neets.cc/video/LHAhVjNbr8GicDsPn9Z1Er/large.jpg","medium":"http://img.neets.cc/video/LHAhVjNbr8GicDsPn9Z1Er/medium.jpg"},
        episodesCount:3,
        title:'剧集版超能陆战队',
        state:1,
        showButton:0
      },
      {
        id:"3b498111c26c4ff2ab9ada04727dd294",
        photos:{"small":"http://img.neets.cc/video/3b498111c26c4ff2ab9ada04727dd294/small.jpg","large":"http://img.neets.cc/video/3b498111c26c4ff2ab9ada04727dd294/large.jpg","medium":"http://img.neets.cc/video/3b498111c26c4ff2ab9ada04727dd294/medium.jpg"},
        episodesCount:11,
        title:'逃避虽可耻但有用',
        state:1,
        showButton:0
      },
      {
        id:"5b063067cd4b4e8cb63baec11151f850",
        photos:{"small":"http://img.neets.cc/video/5b063067cd4b4e8cb63baec11151f850/small.jpg","large":"http://img.neets.cc/video/5b063067cd4b4e8cb63baec11151f850/large.jpg","medium":"http://img.neets.cc/video/5b063067cd4b4e8cb63baec11151f850/medium.jpg"},
        episodesCount:11,
        title:'请回答1988',
        state:1,
        showButton:0
      },
      {
        id:"7e8efa8ede784d349a3d4811e6cb1708",
        photos:{"small":"http://img.neets.cc/video/7e8efa8ede784d349a3d4811e6cb1708/small.jpg","large":"http://img.neets.cc/video/7e8efa8ede784d349a3d4811e6cb1708/large.jpg","medium":"http://img.neets.cc/video/7e8efa8ede784d349a3d4811e6cb1708/medium.jpg"},
        episodesCount:20,
        title:'小谢尔顿 第一季',
        state:1,
        showButton:0
      }
  ],
  },
// --------------------------------------------------
  mutations: {
    set_navlist(state,payload){
        state.navlist=payload
    },
    set_defaultlist(state,payload){
      state.defaultlist=payload
    },
    change(state,payload){
      state.navnow=payload
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
