import Vue from 'vue'
import store from './store/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

require('!style-loader!css-loader!less-loader!./assets/css/main.less');

import index from './page/index.vue'
import Creat from './page/Creat.vue'
import CreatSelect from './page/CreatSelect.vue'
import CreatFinish from './page/CreatFinish.vue'
import CreatSuccess from './page/CreatSuccess.vue'

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
    {
      path: '/CreatFinish',
      component: CreatFinish
    },
    {
      path: '/CreatSuccess',
      component: CreatSuccess
    }
  ]
})


new Vue({
  router,
  store,
  data:{
    examTime: '2017-6-17',
    preExamDay: '90'
  },
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
