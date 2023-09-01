<template>
  <div>
      <h1>测试axios二次封装</h1>
  </div>
</template>

<script setup lang="ts">
import request from "@/utils/request.ts";
import {onMounted} from "vue";

onMounted(async () => {
 const res =  await request({
      url: '/user/login',
      method: 'post',
      data: {
        username: 'admin',
        password: '111111',
      }
  })
  console.log("res = ", res)
})

</script>

<style scoped lang="scss">

</style>
