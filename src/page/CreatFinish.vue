<template>
  <div id="CreatFinish">
      <header-lg bigTitle="CET-4" noticeTitle="四级单词记忆管理"></header-lg>
      <div class="padding-md">
        <div class="text-size-lg">真实姓名</div>
        <input type="text">
        <div class="text-size-lg">注册手机号</div>
        <input type="text">
        <div class="padding-md"></div>
        <div class="text-size-lg">性别</div>
        <ul class="radio-sm">
          <li class="radiosm active" id="data-90" @click="preExamDay('data-90')">
            <div class="context">男</div>
          </li>
          <li class="radiosm no-active" id="data-60" @click="preExamDay('data-60')">
            <div class="context">女</div>
          </li>
        </ul>
        <div class="cf"></div>
      </div>
      my is {{this.$parent.examTime}}&{{this.$parent.preExamDay}}
    <nav-btn @click.native="goFinish()" val="完成注册" color="orange" class="bottomBtn"></nav-btn>
  </div>
</template>
<script>
import headerLg from "../components/header-lg";
import navBtn from "../components/nav-btn.vue";
export default {
  name:'CreatFinish',
  components:{headerLg,navBtn},
  methods:{
    goFinish(){
      this.$router.push({path:'/Creat'})
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
input{
  border:1px solid #eee;
  width: 100%;
  height: 38px;
  margin: 20px 0 0 0;
}
.radio-sm{
  li{
    float: left;
    width: 50px;
    height: 50px;
    padding:5px;
    margin-right:20px;
  }
  .active{
    border:1px solid @green;
    div{
      background-color: @green;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: @white;
    }
  }
  .no-active{
    border:1px solid transparent;
    div{
      background-color: #eee;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #333;
      border:1px solid #d3d3d3
    }
  }
}
</style>


