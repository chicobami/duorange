<script setup>
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button :class="{ disabled: props.isDisabled }">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: #C9A444;
  font-family: 'Orbitron';
  border: none;
  box-shadow: 0rem 0.3rem #846B29;
  border-radius: 0.7rem;
  width: auto;
  font-weight: 700;
  padding: 0.5rem 0.8rem;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  letter-spacing: 0.15rem;
}

.disabled {
  background-color: #CED4DA;
  pointer-events: none;
}

</style>