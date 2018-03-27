<template>
  <div id="CreatSelect">
      <div class="padding-lg">
        <p class="text-size-lg">请选择考试时间</p>
        <div class="padding-sm"></div>
        <div class="text-size-lg-note">CET考试时间定于每年6月和12月的第三个星期六</div>
        <div class="padding-lg"></div>
        <div class="text-size-md">2017年</div>
        <div class="text-size-lg-note" @click="moreBtn">选择其他的考试时间</div>
        <div class="padding-md"></div>
        <div class="radio-lg">
          <ul>
            <li class="radiolg active" id="data-2018-6-17" @click="dataSelect('data-2018-6-17')">
              <div class="context">6月17日</div>
            </li>
            <li class="radiolg no-active" id="data-2018-12-16" @click="dataSelect('data-2018-12-16')">
              <div class="context">12月16日</div>
            </li>
          </ul>
          <ul class="rodioMore" v-show="rodioMore">
            <li class="radiolg no-active" id="data-2019-6-17" @click="dataSelect('data-2019-6-17')">
              <div class="context">2019-6-17</div>
            </li>
            <li class="radiolg no-active" id="data-2019-12-16" @click="dataSelect('data-2019-12-16')">
              <div class="context">2019-12-16</div>
            </li>
            <li class="radiolg no-active" id="data-2020-6-17" @click="dataSelect('data-2020-6-17')">
              <div class="context">2020-6-17</div>
            </li>
          </ul>
          <div class="cf"></div>
        </div>
        <div class="padding-lg"></div>
        <div class="text-size-md">预留备考时间</div>
        <div class="text-size-lg-note">考试的多少天计划</div>
        <div class="padding-md"></div>
        <ul class="radio-md">
            <li class="radiomd active" id="data-90" @click="preExamDay('data-90')">
              <div class="context">90天</div>
            </li>
            <li class="radiomd no-active" id="data-60" @click="preExamDay('data-60')">
              <div class="context">60天</div>
            </li>
            <li class="radiomd no-active" id="data-30" @click="preExamDay('data-30')">
              <div class="context">30天</div>
            </li>
          </ul>
      </div>
      <div class="cf"></div>
      <div class="padding-md"></div>
      <nav-btn @click.native="goCreatFinish()" val="开始吧" color="orange"></nav-btn>
  </div>
</template>
<script>
import headerLg from '../components/header-lg.vue'
import navBtn from '../components/nav-btn.vue'
//导入
export default { 
  name : 'CreatSelect',
  components:{headerLg,navBtn},
  data(){
    return{
      rodioMore:false
    }
  },
  methods:{
    moreBtn(){
      this.rodioMore = !this.rodioMore
    },
    goCreatFinish(){
      this.$router.push({path:'/CreatFinish'})
    },
    dataSelect(id){
      var radio = document.getElementsByClassName('radiolg')
      for (let i = 0; i < radio.length; i++) {
        radio[i].setAttribute("class","radiolg no-active")
      }
      document.getElementById(id).setAttribute("class","radiolg active")
      this.$parent.examTime = id.replace(/data-/g,"")
    },
    preExamDay(id){
      var radiomd = document.getElementsByClassName('radiomd')
      for (let i = 0; i < radiomd.length; i++) {
        radiomd[i].setAttribute("class","radiomd no-active")
      }
      document.getElementById(id).setAttribute("class","radiomd active")
      this.$parent.preExamDay = id.replace(/data-/g,"")
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
#CreatSelect{
  background: url(../assets/images/tartan.png) repeat;
}
.radio-lg{
  li{
    float: left;
    width: 120px;
    height: 120px;
    padding:5px;
    margin: 0 20px 10px 0;
  }
  .active{
    border:1px solid @green;
    div{
      background-color: @green;
      height: 120px;
      line-height: 120px;
      text-align: center;
      color: @white;
    }
  }
  .no-active{
    border:1px solid transparent;
    div{
      background-color: #eee;
      height: 120px;
      line-height: 120px;
      text-align: center;
      color: #333;
      border:1px solid #d3d3d3
    }
  }
}
.radio-md{
  li{
    float: left;
    width: 80px;
    height: 80px;
    padding:5px;
    margin-right:20px;
  }
  .active{
    border:1px solid @green;
    div{
      background-color: @green;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: @white;
    }
  }
  .no-active{
    border:1px solid transparent;
    div{
      background-color: #eee;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #333;
      border:1px solid #d3d3d3
    }
  }
}
</style>
