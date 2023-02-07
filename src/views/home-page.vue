<template>
  <van-cell v-for="item in 40" :key="item" :title="item"/>
  <van-button @click="btnJump">children</van-button>
  <van-back-top></van-back-top>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function btnJump() {
  router.push('/children')
}
</script>