<script setup>
import ButtonPart from '../parts/ButtonPart.vue';
const props = defineProps({
  isCompleted: Boolean,
  number: Number,
  title: String,
  root: String,
})

</script>
<template>
  <RouterLink :to="{ name: 'quest'+props.number }">
    <ButtonPart :class="{completed: props.isCompleted}">
      <p class="quest-number">Quest{{ props.number }}</p>
      <p class="quest-title">{{ props.title }}</p>
    </ButtonPart>
  </RouterLink>
</template>

<style scoped>
.completed { 
  background-color: #846B29;
  box-shadow: 0rem 0.4rem #C9A444;
}

.quest-number {

}

.quest-title {

}
</style>

