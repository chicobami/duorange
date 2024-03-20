<script setup>
  const props = defineProps({
    placeholder: String
  })
</script>

<template>
  <input :placeholder="props.placeholder"/>
</template>

<style scoped>
  input {
    border-color: #846B29;
  }
</style>