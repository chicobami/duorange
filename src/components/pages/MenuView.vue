<script setup>
import { ref } from 'vue'
import MenuButton from '../templates/MenuButton.vue';
import FishingModal from '../templates/FishingModal.vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const quests = [
  {
    number: 1,
    title: 'アカウントってなに？',
    isCompleted: false
  },
  {
    number: 2,
    title: 'フィッシング詐欺とは',
    isCompleted: false
  }
]

const isModal = ref(false)

const starQuest1 = () => {
  router.push('/quest1')
}

const showModal = () => {
  isModal.value = true
}

</script>

<template>
  <div class="wrap-menu-view" :class="{'show-modal': isModal }">
    <FishingModal v-if="isModal" class="fishing-modal"/>
    <div class="left-area">
      <h1 class="menu-title">Quest</h1>
      <MenuButton 
        :is-completed="quests[0].isCompleted"
        :number="quests[0].number"
        :title="quests[0].title"
        @click="starQuest1()"
      />
      <MenuButton 
        :is-completed="quests[1].isCompleted"
        :number="quests[1].number"
        :title="quests[1].title"
        @click="showModal()"
      />
      <p class="sub-text">COMING SOON...</p>
    </div>
    <div class="right-area">
      <div class="logout-area">
        <RouterLink to="/"><button>ログアウト</button></RouterLink>
      </div>
      <div class="teach-cat-area">
        <div class="wrap-dialogue-box">
          <div class="dialogue-box">
            <p class="dialogue">Questを進めてQOLアップだ！</p>
          </div>
        </div>
        <div class="wrap-cat">
          <img class="teach-cat" src="/images/teach-cat-white.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap-start-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap-menu-view {
  background-image: url("../../../images/22823124.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left-area {
  background-color: #ffffff;
  width: 50vw;
  padding-left: 4rem;
}

.menu-title {
  font-family: 'Orbitron';
  color: #846B29;
  font-size: 5.5rem;
  font-weight: 900;
}

.sub-text {
  font-family: 'Orbitron';
  color: #C9A444;
  font-weight: 700;
  font-size: 1.5rem;
}

.right-area {
  background-color: rgb(255 255 255 / 40%);
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.logout-area {
  height: 70vh;
}

.teach-cat-area {
  display: flex;
  height: 30vh;
  padding: 0 2rem 2rem 0;
}

.dialogue-box {
  background-color: #ffffff;
  /* height: 100%; */
  border-radius: 1rem;
  padding: 0.5rem;
}

.dialogue {
  font-family: 'Orbitron';
  font-size: 0.9rem;
  color: #846B29;
  font-weight: 700;
}

.teach-cat {
  width: 150px;
}


</style>