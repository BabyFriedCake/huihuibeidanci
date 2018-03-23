<template>
  <div id="creat">
      <header-lg bigTitle="CET-4" noticeTitle="四级单词记忆管理"></header-lg>
      <div class="text-text padding-md">
        <p class="text-size-lg">Hi,</p>
        <p class="text-indent">1亲爱的你亲爱的你亲爱的你,亲爱的你亲爱的你亲爱的你亲爱的你.亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你</p>
        <p class="text-indent">222亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你2亲爱的你亲爱的你亲爱的你,亲爱的你亲爱的你亲爱的你亲爱的你.亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你亲爱的你</p>
        <p class="text-align-right">会会</p>
      </div>
      <nav-btn @click.native="goCreatSelect" val="创建计划" color="orange" class="bottomBtn"></nav-btn>
  </div>
</template>
<script>
import headerLg from '../components/header-lg.vue'
import navBtn from '../components/nav-btn.vue'
//导入
export default { 
  name : 'creat',
  components:{headerLg,navBtn},
  methods:{
    goCreatSelect(){
      this.$router.push({path:'/CreatSelect'})
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
.text-text{
  font-size: 110%;
}
p{margin-bottom: 10px}

</style>
