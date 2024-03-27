<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { auth } from '../../firebase_settings/index.js';
import { signInWithEmailAndPassword } from "firebase/auth";

import InputPart from '../parts/InputPart.vue'
import ButtonPart from '../parts/ButtonPart.vue'

const router = useRouter()
const email = ref('');
const password = ref('');

const props = defineProps({
  destination: {
    type: String,
    default: ''
  }
})


const loginHandler = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/' + props.destination);
  } catch (error) {
    alert('登録された正しいメールアドレス/パスワードではありません！');
  }
};
</script>

<template>
  <div class="wrap-login-form">
    <p class="login-info-text">遊んだことのある方はこちら</p>
    <InputPart v-model="email" placeholder="メールアドレス" class="login-input" />
    <InputPart v-model="password" type="password" placeholder="パスワード" class="login-input" />
    <ButtonPart class="login-button" @click="loginHandler()">ログイン</ButtonPart>
  </div>
</template>

<style scoped>
.wrap-login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-info-text {
  font-family: 'Orbitron';
  color: #846B29;
  text-align: justify;
  text-align-last: justify;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
}

.wrap-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-input {
  width: 20rem;
  margin: 1rem 0;
}

.login-button {
  margin-top: 1rem;
  font-size: 1.4rem;
}
</style>