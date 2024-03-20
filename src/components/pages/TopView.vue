<script setup>
import TitleLogo from '../parts/TitleLogo.vue';
import StartButton from '../templates/StartButton.vue'
</script>

<template>
  <div class="wrap-top-view">
    <div class="white-cover">
      <TitleLogo />
      <div class="wrap-start-button">
        <StartButton :is-signed-up="false"/>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.wrap-start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 11rem);
}

.wrap-top-view {
  background-image: url("../../../images/22823124.jpg");
  background-size: cover;
  width: 100vw;
}

.white-cover {

}
</style>