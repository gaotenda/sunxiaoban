<script setup lang="ts">
import Price from '@/views/about/price/Price.vue' 
import List from '@/views/about/price/list/List.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
    <div class="about">
        <div class="box">
        <el-menu
        background-color="#001135"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>资金管理</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>系统管理</span>
        </el-menu-item>
      </el-menu>
      </div>
      <div class="box">
        <Price />
       </div>
      <div class="box1">
        <List />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.about{
    width: 100vw;
    height: 100vh;
    display: flex;
}
.box,.el-menu-vertical-demo{
    width: 200px;
    height: 100%;
}
.box1{
    flex: 1;
}
</style>
