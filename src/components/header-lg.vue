<template>
  <div id="header-lg">
    <h3>CET-4</h3>
    <h4>四级单词记忆管理</h4>
  </div>
</template>
<script>
export default {
  name:'header-lg',
  props:['bigTitle','noticeTitle']
}
</script>
<style scoped lang="less">
@import '../assets/css/variables.less';
#header-lg{
  height:110px;
  box-shadow:  #ddd 0 3px;
  background: linear-gradient(270deg , @green 0% ,@turquoise 100%);
  color: @white;
  padding: 40px 0 0 20px
}
h3{
  font-size: 300%
}
h4{
  font-size: 120%;
  position: relative;
  margin-top: -10px;
}
</style>
