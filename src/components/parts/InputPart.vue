<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :placeholder="props.placeholder" />
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