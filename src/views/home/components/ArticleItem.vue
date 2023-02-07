<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '文章标题'
  }
})

</script>
<template>
  <el-card>
    <el-image class="w-100px h-100px inline-block"
      src="https://ts1.cn.mm.bing.net/th/id/R-C.ec39137818fd8db926f7d70526e713f6?rik=s2GonFWhQMKXSA&riu=http%3a%2f%2ff.hiphotos.baidu.com%2fzhidao%2fpic%2fitem%2f10dfa9ec8a136327ef326a3d908fa0ec09fac7e5.jpg&ehk=0tppGKHRnTrigaX7hr3Oev6LX05YDSuwNvYPglQiybA%3d&risl=&pid=ImgRaw&r=0"
      :fit="'fit'" />
    <div class="inline-block align-top w-[calc(100%-100px)]">
      
      <strong class="text-lg font-bold">{{ title }}</strong>
      <div class="text-sm">
        <p>文章描述...
        </p>
        <span type="text">More</span>

      </div>
      
    </div>
  </el-card>
</template>
