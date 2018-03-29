<template>
  <div id="header-md">
    <h3 class="fl">{{Tit}}</h3>
    <div class="fr" v-show="meunBtn">
      <img src="../assets/images/menu.png" alt="">
    </div> 
    <div class="cf"></div>
  </div>
</template>
<script>
export default {
  name:'header-md',
  props:['Tit','show'],
  data(){
    return{
      meunBtn: true
    }
  },
  computed:{
    meunBtn:function(){
      if(this.show == 'y'){
        return this.meunBtn = true
      }else{
        return this.meunBtn = false
      }
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/variables.less';
#header-md{
  box-shadow:  #ddd 0 3px;
  background: linear-gradient(270deg , @green 0% ,@turquoise 100%);
  color: @white;
  padding: 10px 20px
}
h3{
  font-size: 150%;
  font-weight: bold;
}
</style>
