<script setup>
import TitleLogo from '../parts/TitleLogo.vue';
import MenuButton from '../templates/MenuButton.vue';

const quests = [
  {
    number: 1,
    title: 'アカウントってなに？',
    isCompleted: true
  },
  {
    number: 2,
    title: 'フィッシング詐欺とは',
    isCompleted: false
  }
]

</script>

<template>
  <div class="wrap-top-view">
    <div class="white-cover">
      <h1 class="menu-title">Quest</h1>
      <MenuButton v-for="quest in quests"
        :is-completed="quest.isCompleted"
        :number="quest.number"
        :title="quest.title"
      />
    </div>
  </div>
  <p><RouterLink to="/">ログアウト</RouterLink></p>
</template>

<style scoped>
.wrap-start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrap-top-view {
  background-image: url("../../../images/22823124.jpg");
  background-size: cover;
  width: 100vw;
}

.white-cover {

}

.menu-title {
  font-family: 'Orbitron';
  color: #ffffff;
}


</style>