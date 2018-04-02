<template>
  <div id="face" class="padding-md">
      <img :src="this.$store.state.imgUrl" alt="" class="fl">
      <div class="fl">
        <h3 class="text-size-lg fl">{{this.$store.state.name}}</h3>
        <notice class="fl" :num="this.$store.state.notice" v-show="noticeShow"></notice>
        <div class="cf"></div>
        <h4 class="text-size-md">
        记忆力:<span class="orange">{{this.$store.state.memory}}</span>
        经验值:<span class="green">{{this.$store.state.xp}}</span>
        </h4>
      </div>
      <div class="cf"></div>
  </div>
</template>
<script>
import notice from "../components/notice";
export default {
  name:'face',
  components:{notice},
  computed:{
    noticeShow(){  
        if(this.$store.state.notice == 0){
            return false
        }else{
            return true
        }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
img{border:1px solid #999;padding: 5px;margin-right:10px;}
h3{line-height:50px;margin-right: 10px;}
.orange{color:@orange}
.green{color:@green}
</style>
