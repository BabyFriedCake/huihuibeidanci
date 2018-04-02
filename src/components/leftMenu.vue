<template>
  <div id="leftMenu">
    <div id="memu">
        <h2 class="text-align-center">CET-4</h2>
        <h3 class="text-align-center">四级管理单词记忆管理</h3>
    </div>
    <div id="zz" @click="closeMenu"></div>
  </div>
</template>
<script>
export default {
  name:'leftMenu',
  methods:{
    closeMenu(){
      this.$store.state.leftShow=false
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/css/variables.less';
#memu{
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: rgba(0, 0, 0,0.8);
  color: #fff
}
#zz{
  position: fixed;
  top: 0;
  left: 0;
  z-index:99;width:100%;height:100%;background: rgba(0, 0, 0, .2)}
</style>
