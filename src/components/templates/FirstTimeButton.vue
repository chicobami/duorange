<script setup>
import ButtonPart from '../parts/ButtonPart.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const startHandler = () => {
  router.push('/prologue')
}
</script>
<template>
<ButtonPart class="first-time-button" @click="startHandler">
  はじめての方はこちら
</ButtonPart>
</template>
<style scoped>
.first-time-button {
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  background: linear-gradient(to right, #C9A444, #846B29);
  padding: 1rem 5rem;
}
</style>