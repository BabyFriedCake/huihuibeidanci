<template>
  <div id="CreatFinish">
      <header-lg bigTitle="CET-4" noticeTitle="四级单词记忆管理"></header-lg>
      <div class="padding-md">
        <div class="text-size-lg">真实姓名</div>
        <input type="text" v-model="name">
        <div class="padding-sm"></div>
        <div class="text-size-lg">注册手机号</div>
        <input type="text" v-model="phone" onkeyup="this.value=this.value.replace(/\D/g,'')">
        <div class="padding-md"></div>
        <div class="text-size-lg">性别</div>
        <div class="padding-sm"></div>
        <ul class="radio-sm">
          <li class="radiosm active" id="sex-1" @click="sexSelect('sex-1')">
            <div class="context">男</div>
          </li>
          <li class="radiosm no-active" id="sex-2" @click="sexSelect('sex-2')">
            <div class="context">女</div>
          </li>
        </ul>
        <div class="cf"></div>
      </div>
      my is {{this.$parent.examTime}}&{{this.$parent.preExamDay}}
    <nav-btn @click.native="goCreatSuccess()" val="完成注册" color="orange" class="bottomBtn"></nav-btn>
  </div>
</template>
<script>
import headerLg from "../components/header-lg.vue";
import navBtn from "../components/nav-btn.vue";
export default {
  name:'CreatFinish',
  components:{headerLg,navBtn},
  data(){
    return {
      phone:'',
      name:'',
      sex:''
    }
  },
  methods:{
    goCreatSuccess(){
      if(this.name.length != 0 && this.phone.length != 0){
        var formData = new FormData()
        formData.append("name",this.name)
        formData.append("phone",this.phone)
        formData.append("sex",this.sex)
        formData.append("examTime",this.$parent.examTime)
        formData.append("preExamDay",this.$parent.preExamDay)
        console.log(formData.get("name"))
        this.$ajax({
            method: 'post',
            url: "http://"+this.$store.state.serverIP+"/json/post_reguser.php",
            data: formData
        }).then(function(res){
          if(res.data = 1){
            this.$router.push({path:'/CreatSuccess'})
          }
        }.bind(this)).catch(function(err){
          this.$router.push({path:'/errorPage'})
        }.bind(this))
      }
    },
    sexSelect(id){
      var sexs = document.getElementsByClassName('radiosm');
      for (let i = 0; i < sexs.length; i++) {
        sexs[i].setAttribute("class","radiosm no-active")
      }
      document.getElementById(id).setAttribute("class","radiosm active")
      this.sex = id.replace(/sex-/g,'')
      console.log(this.sex)
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
  font-size: 100%;
  color: #666;
  text-indent: 5px;
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


