<template>
  <div id="CreatSelect">
      <div class="padding-lg">
        <p class="text-size-lg">请选择考试时间</p>
        <div class="padding-sm"></div>
        <div class="text-size-lg-note">CET考试时间定于每年6月和12月的第三个星期六</div>
        <div class="padding-lg"></div>
        <div class="text-size-md">2017年</div>
        <div class="text-size-lg">选择其他的考试时间</div>
        <div class="padding-lg"></div>
        <div class="radio-lg">
          <ul>
            <li class="radio active" @click="dataSelect('data-2018-6-17')">
              <div class="context">6月17日</div>
            </li>
            <li class="radio no-active" @click="dataSelect('data-2018-12-16')">
              <div class="context">12月16日</div>
            </li>
          </ul>
          <div class="cf"></div>
        </div>
        <div>预留备考时间</div>
        <div>考试的多少天计划</div>
      </div>
      <nav-btn @click="goCreatSelect" val="开始吧" color="orange"></nav-btn>
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
    },
    dataSelect(id){
      var radio = 
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
#CreatSelect{
  background: url(../assets/images/tartan.png) repeat;
  height: 1000px;
}
.radio-lg{
  li{
    float: left;
    width: 40%;
    height: 100px;
    padding:5px;
  }
  .active{
    border:1px solid @green;
    div{
      background-color: @green;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: @white;
    }
  }
  .no-active{
    border:0;
    div{
      background-color: #eee;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #333;
      border:1px solid #d3d3d3
    }
  }
}
</style>
