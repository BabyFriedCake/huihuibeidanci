<template>
  <div id="header-md">
    <h3 class="fl">{{Tit}}</h3>
    <div class="fr" v-show="meunBtn" @click="openMenu">
      <img src="../assets/images/menu.png" alt="">
    </div> 
    <div class="cf"></div>
  </div>
</template>
<script>
export default {
  name:'header-md',
  props:['Tit','show'],
  computed:{
    meunBtn(){
      if(this.show == 'y'){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    openMenu(){
      this.$store.state.leftShow = true
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
