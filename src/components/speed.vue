<template>
  <div id="speed">
      <div class="speed">
        <div class="da"></div>
        <div class="xiao"></div>
        <div class="Tex">
            <p>{{this.$store.state.pre}}%</p>
            <p>{{preTex}}</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'speed',
  props:['speedPre'],
  data(){
      return{
          preTex:'已完成'
      }
  },
  mounted(){
      
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
.speed{
    position: relative;
}
.da{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #ddd;
    position: absolute;
}
.xiao{
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: @green;
    transform: rotate(0deg);
    position: absolute;
    top: 20px;
    left:20px;
}
.Tex{
    color: #fff;
    text-align: center;
    position: absolute;
    left:80px;
    top:80px;
    z-index:999;
}
</style>

