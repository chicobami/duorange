<script setup>
import TitleLogo from '../parts/TitleLogo.vue';
import LoginForm from '../templates/LoginForm.vue';
</script>

<template>
  <TitleLogo>Cyber Key Quest</TitleLogo>
  <LoginForm class="login-form"/>
  <p>デモではサンプルのメールアドレスとパスワードを入力してください！</p>
  <p>メールアドレス: duorange@example.com</p>
  <p>パスワード: duorange@example.com</p>
</template>

<style scoped>
.login-form {
  margin-top: 3rem;
}
</style>