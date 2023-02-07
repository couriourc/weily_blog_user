<script setup lang="ts">
import Logo from '@/components/icons/Logo.vue'
import Dialog from '@/components/Dialog/index.vue'
import { DialogInstance } from '@/dialog-viewer'

const useTopHeader = (initHeight: number) => {
  function getScrollTop() {
    let scrollTop = document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop
    return scrollTop;
  }
  let initScrollTop = getScrollTop();
  const scrollDirection = ref('up')
  const isHeaderShow = ref(true);
  window.addEventListener('scroll', () => {
    let currentScrollTop = getScrollTop();
    if (currentScrollTop >= initScrollTop + 9) {
      scrollDirection.value = 'up'
    } else {
      scrollDirection.value = 'down'
    }

    isHeaderShow.value = !(scrollDirection.value == 'down' && currentScrollTop > initHeight)

    initScrollTop = currentScrollTop;
  })

  return [isHeaderShow, scrollDirection];
}

const [isHeaderShow, scrollDirection] = useTopHeader(100);
const visible = ref(false)
const DialogViewerGlobalName = ref('default')
const login = () => {
  visible.value = true
}
const { proxy } = getCurrentInstance();

const DialogViewer = watch(['proxy.globalInfo.DialogViewerGlobalName'],
  () => {
    console.log(DialogViewerGlobalName.value)
    return DialogInstance[DialogViewerGlobalName.value ?? 'default']
  }
)
</script>

<template>
  <!-- <div >右側</div> -->
  <div w-100vw bg-gray-100 min-h-100vh>
    <Transition name="slide">
      <div class="header w-100%  m-auto bg-white z-100" v-if="isHeaderShow" drop-shadow rounded-sm>
        <div class="w-80% h-100% " m-auto flex items-center justify-between>
          <div class="border" w-100px text-center>
            <Logo></Logo>
          </div>
          <div class="w-70%">
            导航区域
          </div>
          <div class="border">
            <div flex>
              <el-button @click="login">登录</el-button>
              <el-button @click="login" type="primary">發帖</el-button>
              <el-button @click="login" type="primary" shape="circle"><i>哥人</i></el-button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <el-affix :offset="0">
      <main class="w-100% h-100%" z-0>
        <RouterView />
      </main>
    </el-affix>
    <Dialog v-model:visible="visible">
      <template #header>Hellow</template>
      <template #body>
        <component :is="DialogViewer"></component>
      </template>
    </Dialog>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 64px;
}
</style>
