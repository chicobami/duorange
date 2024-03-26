<script setup>
import { ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ButtonPart from '../parts/ButtonPart.vue';

const auth = getAuth();
const isSignedUp = ref(false);
const router = useRoute();
const props = defineProps(['isSignedUp'])

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isSignedUp.value = true;
    } else {
      isSignedUp.value = false;
    }
  });
});
</script>
<template>
  <RouterLink to="/prologue" v-if="isSignedUp">
    <ButtonPart class="start-button">GAME START</ButtonPart>
  </RouterLink>
  <RouterLink to="/login" v-else>
    <ButtonPart class="start-button">GAME START</ButtonPart>
  </RouterLink>
</template>

<style scoped>
.start-button {
  font-size: 3rem;
}
</style>

