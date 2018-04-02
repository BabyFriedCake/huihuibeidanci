<template>
  <div id="notice">
      {{numText}}
  </div>
</template>
<script>
export default {
  name:'notice',
  props:['num'],
  computed:{
      numText(){
          var tempNum = parseInt(this.num)
          if(tempNum>99){
            return 99
          }else{
              return tempNum
          }
      }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/css/variables.less';
#notice{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: @orange;
    text-align: center;
    color: #fff;
    line-height: 30px;
}
</style>
