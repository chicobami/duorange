<script setup>
import { useRouter } from 'vue-router'

import InputPart from '../parts/InputPart.vue'
import ButtonPart from '../parts/ButtonPart.vue'

const router = useRouter()

const inputRequirements = [
  {
    name: 'email',
    placeholder: 'メールアドレス'
  },
  {
    name: 'password',
    placeholder: 'パスワード'
  }
]

const loginHandler = () => {
  router.push('/menu')
}
</script>

<template>
  <div class="wrap-login-form">
    <InputPart v-for="inputRequirement in inputRequirements"
      :placeholder="inputRequirement.placeholder"
      class="login-input"
    />
    <ButtonPart class="login-button" @click="loginHandler">
      ログイン
    </ButtonPart>
  </div>
</template>

<style scoped>
.wrap-login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrap-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-input {
  width: 20rem;
}

.login-button {
  margin-top: 1rem;
  font-size: 1.4rem;
}
</style>