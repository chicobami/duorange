<script setup>
import { ref } from 'vue'
import MenuButton from '../templates/MenuButton.vue';
import LogoutButton from '../templates/LogoutButton.vue'
import FishingModal from '../templates/FishingModal.vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const quests = [
  {
    number: 1,
    title: 'アカウントってなに？',
    isCompleted: false,
    isDisabled: false
  },
  {
    number: 2,
    title: 'フィッシング詐欺とは',
    isCompleted: false,
    isDisabled: false
  }
]

const dialogue = quests[1].isDisabled ? 'Quest1をクリックするのだ！' : 'Questを進めてQOLアップだ！';

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
        :is-disabled="quests[0].isDisabled"
        @click="starQuest1()"
      />
      <MenuButton 
        :is-completed="quests[1].isCompleted"
        :number="quests[1].number"
        :title="quests[1].title"
        :is-disabled="quests[1].isDisabled"
        @click="showModal()"
      />
      <p class="sub-text">COMING SOON...</p>
    </div>
    <div class="right-area">
      <div class="logout-area">
        <LogoutButton />
      </div>
      <div class="teach-cat-area">
        <div class="wrap-dialogue-box">
          <div class="dialogue-box">
            <p class="dialogue">{{ dialogue }}</p>
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
.wrap-menu-view {
  background-image: url("/images/22823124.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.left-area {
  background-color: #ffffff;
  width: 50vw;
  padding: 4rem 0 0 4rem;
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
  padding: 7rem 6rem 2rem 0;
}

.logout-area {
  height: 70vh;
}

.teach-cat-area {
  display: flex;
  height: 30vh;
  align-items: flex-end;

}

.dialogue-box {
  background-color: #ffffff;
  /* height: 100%; */
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.dialogue {
  font-family: 'Orbitron';
  font-size: 1.5rem;
  color: #846B29;
  font-weight: 700;
}

.teach-cat {
  width: 200px;
}


</style>