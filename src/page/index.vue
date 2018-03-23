<template>
  <div id="index">
      <div @click="goCreat">my name is index !</div>
  </div>
</template>
<script>
//导入
export default { 
  name : 'index',
  methods:{
    goCreat(){
      this.$router.push({path:'/Creat'})
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
#index{
  width: 100%;
  height: 2000px;
  background-color: @green;
}
</style>
