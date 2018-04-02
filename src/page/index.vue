<template>
  <div id="index">
      <headerMd Tit="CET-4" show="y"></headerMd>
  </div>
</template>
<script>
//导入
import headerMd from '../components/header-md.vue'
export default { 
  name : 'index',
  components:{headerMd},
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
}
</style>
