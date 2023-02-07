<script setup lang="ts">
import ArticleItem from './components/ArticleItem.vue';
</script>

<template>
  <el-container class="h-100vh">
    <el-side class="w-20% text-right p-3">
      <div class="side-left inline-block h-400px w-100%">左邊</div>
    </el-side>
    <el-main class="bg-white">
      <ArticleItem title="文章标题"></ArticleItem>
    </el-main>
    <el-side class="w-20% p-3">
      <div class="side-left inline-block h-400px w-100%">
        <el-anchor></el-anchor>
      </div>
    </el-side>
  </el-container>
</template>
