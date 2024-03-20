<script setup>
import ButtonPart from '../parts/ButtonPart.vue';
const props = defineProps(['isSignedUp'])

</script>
<template>
  <RouterLink to="/login" v-if="isSignedUp">
    <ButtonPart>GAME START</ButtonPart>
  </RouterLink>
  <RouterLink to="/prologue" v-else>
    <ButtonPart>GAME START</ButtonPart>
  </RouterLink>
</template>

<style scoped>
</style>

