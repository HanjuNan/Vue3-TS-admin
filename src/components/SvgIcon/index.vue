<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
console.log("SvgIcon Component setup")
defineProps({
  // 前缀,默认值:'#icon-'
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 需要显示的icon文件名称
  name: {
    type: String,
    default: "",
  },
  // 需要显示的图标颜色
  color: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "16px",
  },
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style scoped></style>
