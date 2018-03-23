<template>
  <div id="CreatSelect">
      <div>
        <p class="text-lg">请选择考试时间</p>
        <p class="text-lg">CET考试时间定于每年6月和12月的第三个星期六</p>
        <p class="text-md">2017年</p>
        <p class="text-lg">选择其他的考试时间</p>
        <p>预留备考时间</p>
        <p>考试的多少天计划</p>
      </div>
      <nav-btn @click="goCreatSelect" val="开始吧" color="green" class="bottomBtn"></nav-btn>
  </div>
</template>
<script>
import headerLg from '../components/header-lg.vue'
import navBtn from '../components/nav-btn.vue'
//导入
export default { 
  name : 'CreatSelect',
  components:{headerLg,navBtn},
  methods:{
    goCreatSelect(){
      this.$router.push({path:'/CreatSelect'})
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
body{background: url(../assets/images/tartan.png) repeat}
</style>
