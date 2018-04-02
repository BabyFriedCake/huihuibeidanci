<template>
  <div id="index">
      <headerMd Tit="CET-4" :show="a"></headerMd>
      <leftMenu v-show="this.$store.state.leftShow"></leftMenu>
      <face></face>
      <div class="more"></div>
      <speed speed="speedPre"></speed>
  </div>
</template>
<script>
//导入
import headerMd from '../components/header-md.vue'
import leftMenu from '../components/leftMenu.vue'
import face from '../components/face.vue'
import speed from '../components/speed.vue'
export default { 
  name : 'index',
  components:{headerMd,leftMenu,face,speed},
  data(){
    return{
      a:'y'
    }
  },
  methods:{
    goCreat(){
      this.$router.push({path:'/Creat'})
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/variables.less';
#index{
  width: 100%;
}
.more{
  display: block;
  height: 22px;
  background: url(../assets/images/more.png) no-repeat center 0;
}
</style>
