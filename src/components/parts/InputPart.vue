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
  border-radius: 0.7rem;
  font-size: 1rem;
  padding: 0.7rem;
  margin: 0.5rem 0;
  letter-spacing: 0.15rem;
  background-color: #F8F9FA;
}
</style>