<template>
  <div id="nav-btn">
      <button v:bind:class="colrName" class="btn text-size-md">{{ val }}</button>
  </div>
</template>
<script>
export default {
  name:'nav-btn',
  props:['val','color','position'],
  computed:{
      colorName(){
          if(this.color =='orange'){
              return this.colorName = 'orange'
          }else if(this.color =='green'){
              return this.colorName = 'green'
          }
      }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/variables.less';
#nav-btn{
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 10px 0;
    background: rgba(255,255,255,.8)
}
.btn{
    border:0;
    width: 80%;
    height: 45px;
    background-color: @orange;
    color: @white;
    border-radius:@border-radius;
    text-align: center;
    letter-spacing: 2px;
    margin: 0 auto;
    outline: none;
}
</style>
