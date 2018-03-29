<template>
  <div>
    <HeaderMd Tit="CET-4" show="y"></HeaderMd>
    <h2 class="text-align-center mt20pre">注册成功</h2>
    <nav-btn val="查看计划" color="orange" class="bottomBtn"></nav-btn>
  </div>
</template>
<script>
import HeaderMd from '../components/header-md.vue'
import navBtn from '../components/nav-btn.vue'
export default {
  name:'CreatSuccess',
  components:{HeaderMd,navBtn}
}
</script>
<style>
.mt20pre{
  margin-top: 20%;
}
</style>

