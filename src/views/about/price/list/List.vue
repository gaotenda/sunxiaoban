<script setup lang="ts">

</script>

<template>
    <div class="list">
      <div class="top">
         <span>资金组成 x</span>
         <span>资金流向 x</span>
         <span>资金来源 x</span>
         <span>用户管理 x</span>
      </div>
      <div class="bottom">
        资金组成
      </div>
    </div>
</template>

<style lang="scss" scoped>
.list{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.top{
  width: 100%;
  span{
    padding: 2px 10px;
  }
}
.bottom{
  margin-top: 20px;
  flex: 1;
  background: #F0F2F5
}
</style>