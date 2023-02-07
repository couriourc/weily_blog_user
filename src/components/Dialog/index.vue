<script lang="ts" setup>

defineProps({
  "visible": {
    type: Boolean,
    default: () => true
  }
})
const dialogElm: Ref<null | HTMLDialogElement> = ref(null);

const emit = defineEmits(['close', 'update:visible', 'show']);


function close() {
  dialogElm.value.close()
  document.body.style.overflow = ""
}
function show() {
  dialogElm.value.show()
  document.body.style.overflow = "hidden"
}
function hiddenDialog() {
  close();
  emit("close")
  emit('update:visible', false);
}
function showDialog() {
  show()
  emit("show")
  emit('update:visible', true);
}
</script>
<template>
  <mask class="mask " bg-black absolute top-0 z-100 w-100vw h-100vh opacity-80 transition-opacity duration-100
    v-show="visible"></mask>
  <dialog class="top-50% left-50% translate--50% z-1000 shadow-lg" :hidden="!visible" ref="dialogElm" border-none fixed
    rounded-sm :open="visible">
    <div class="header min-w-150px">
      <div class="title inline-block w-90%">
        <slot name="header"></slot>
      </div>
      <span class="close cursor-pointer" @click="hiddenDialog">x</span>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </dialog>
</template>
<style lang="scss" scoped>

</style>

