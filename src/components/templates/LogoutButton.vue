<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router'
const router = useRouter()



const signoutHandler = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('ログアウトが正常に行われました');
    router.push('/')  
  }).catch((error) => {
    // An error happened.
    alert('ログアウトに失敗しました…ねこサイバー仙人にお知らせしてください');
  });
}


</script>
<template>
<button @click="signoutHandler" class="logout-button">
  <img 
    src="/images/logout.svg" 
    alt="ログアウトボタン"
    class="logout-button-icon"
  />
</button>
</template>
<style scoped>
.logout-button {
  background: none;
  border: none;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
  cursor: pointer;
}

.logout-button-icon {
  width: 5rem;
  height: 5rem;
}

</style>