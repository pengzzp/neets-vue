import Vue from 'vue'
import Router from 'vue-router'
// ----------------------------
import download from './views/mobile-download.vue'
import index from './views/index.vue'
import search from './views/search.vue'
// ----------------------------
import main from './components/common/main.vue'
import detail from './components/common/detail.vue'
//-----------------------------
import home from './components/home/home.vue'
import subcriber from './components/subcriber/subcriber.vue'
import category from './components/category/category.vue'
import my from './components/my/my.vue'

Vue.use(Router)

export default new Router({
  routes: [//第一层路由的界面装载在app.vue的router-view中
    {
      path: '/',
      name: 'index',
      component: index,
      children:[//第二层路由的界面装载在第一层路由界面中的router-view中,例：index.vue中
        {
          path:'main',
          name:'main',
          component:main,
          children:[//第三层路由的界面装载在第二层路由界面中的router-view中,例：main.vue中
            {
              path:'home',
              name:'home',
              component:home
            },
            {
              path:'subcriber',
              name:'subcriber',
              component:subcriber
            },
            {
              path:'category',
              name:'category',
              component:category
            },
            {
              path:'my',
              name:'my',
              component:my
            }
          ]
        },
        {
          path:'detail',
          name:'detail',
          component:detail
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path: '/mobile-download',
      name: 'mobile-download',
      component: download
    }

  ]
})
