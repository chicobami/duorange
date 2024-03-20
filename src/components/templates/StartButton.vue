<script setup>
import ButtonPart from '../parts/ButtonPart.vue';
const props = defineProps(['isSignedUp'])

</script>
<template>
  <RouterLink to="/login" v-if="isSignedUp">
    <ButtonPart class="start-button">GAME START</ButtonPart>
  </RouterLink>
  <RouterLink to="/prologue" v-else>
    <ButtonPart class="start-button">GAME START</ButtonPart>
  </RouterLink>
</template>

<style scoped>
.start-button {
  font-size: 3rem;
}
</style>

