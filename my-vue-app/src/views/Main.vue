<script setup>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import commonTab from '@/components/CommonTab.vue'


</script>

<template>
<div class="commen-layout">
  <el-container class="lay-container">
    <!-- 自定义左侧组件 -->
    <common-aside />
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <common-tab />
      <el-main class="right-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<style scoped lang="less">
 .commen-layout,.lay-container{
height: 100%;

 }
 .el-header{
  background-color: #333;
 }
</style>