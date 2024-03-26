<script setup>
import TitleLogo from '../parts/TitleLogo.vue';
import LoginForm from '../templates/LoginForm.vue';
import FirstTimeButton from '../templates/FirstTimeButton.vue';
</script>

<template>
  <div class="wrap-login-view">
    <TitleLogo class="top-logo">Cyber Key Quest</TitleLogo>
    <FirstTimeButton />
    <div class="wrap-login-area">
      <p class="login-info-text">遊んだことのある方はこちら</p>
      <LoginForm class="login-form"/>
    </div>
  </div>
</template>

<style scoped>
.top-logo {
  margin-bottom: 5rem;
}

.wrap-login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrap-login-area {
  margin-top: 5rem;
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

.login-form {
  margin-top: 1rem;
}
</style>