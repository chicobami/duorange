<script setup>
import ButtonPart from '../parts/ButtonPart.vue';
const props = defineProps(['isSignedUp'])

</script>
<template>
  <ButtonPart>
    <RouterLink to="/login" v-if="isSignedUp">GAME START</RouterLink>
    <RouterLink to="/prologue" v-else>GAME START</RouterLink>
  </ButtonPart>
</template>

<style scoped>
a {
  color: #ffffff;
}
</style>