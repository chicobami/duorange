<script setup>

</script>
<template>
  <div id="modal">
    <div id="modal-content" class="modal">
      <p id="modal-message" class="modal__message">サイバーキークエストの割引クーポンをプレゼント！</p>
      <p id="modal-message" class="modal__message">このURLをクリック！</p>
      <RouterLink 
        class="fishing_url"
        to="/fishing"
      >
        http://cyber.is.gd
      </RouterLink>
    </div>
    <div id="modal-overlay"></div>
  </div>
</template>
<style scoped>
.modal {
  padding: 10px 20px;
  border: 2px solid #a5272a;
  background: #faebd7;
  z-index: 2;
  display: block;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.modal__message {
  font-family: 'Orbitron';
}

.fishing_url {
  font-family: 'Orbitron';
  color: #0080FF;
}

#modal-overlay {
  background-color: rgb(73 80 87 / 43);
  z-index: 1;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.75);
}

</style>