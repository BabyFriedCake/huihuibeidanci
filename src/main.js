// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('!style-loader!css-loader!less-loader!./assets/css/main.less');

import index from './page/index.vue'
import Creat from './page/Creat.vue'
import CreatSelect from './page/CreatSelect.vue'

const router = new VueRouter({
  mode : 'history',
  base : __dirname,
  routes : [
    {
      path: '/',
      component: index
    },
    {
      path:'/index',
      component : index
    },
    {
      path: '/Creat',
      component: Creat
    },
    {
      path: '*',
      component: index
    },
    {
      path: '/CreatSelect',
      component: CreatSelect
    },
  ]
})


new Vue({
  router,
  store,
  template: `
    <div id="page">
      <transition name="fade" mode="out-in">      
        <router-view></router-view>
      </transition>
    </div>
  `,
  beforeCreate:function () {
    //和服务器终端连接 跳转
    if (this.$store.state.serverIP == 0){
      router.push({ path: '/error' })
    }
    //判断是否为注册用户
    // if (this.$store.state.newid == 1){
    //   router.push({ path:'/'})
    // }else{
    //   router.push({ path: '/Creat' })
    // }
  }
}).$mount('#app')
