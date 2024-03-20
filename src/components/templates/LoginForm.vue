<script setup>
import InputPart from '../parts/InputPart.vue';
import ButtonPart from '../parts/ButtonPart.vue';

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

}
</script>

<template>
  <div class="wrap-login-form">
    <div class="wrap-inputs">
      <InputPart v-for="inputRequirement in inputRequirements"
        :placeholder="inputRequirement.placeholder"
      />
    </div>
    <ButtonPart @click="loginHandler">
      ログイン
    </ButtonPart>
  </div>
</template>

<style scoped>

</style>