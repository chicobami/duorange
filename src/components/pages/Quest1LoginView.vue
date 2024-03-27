<script setup>
import TitleLogo from '../parts/TitleLogo.vue';
import LoginForm from '../templates/LoginForm.vue';

const destination = 'quest1/clear'
</script>

<template>
  <div class="wrap-login-view">
    <TitleLogo class="top-logo">Cyber Key Quest</TitleLogo>
    <div class="wrap-login-area">
      <LoginForm class="login-form" :destination="destination"/>
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

.login-form {
  margin-top: 1rem;
}
</style>