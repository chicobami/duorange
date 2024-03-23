<script setup>
import ButtonPart from '../parts/ButtonPart.vue';
const props = defineProps({
  isCompleted: Boolean,
  number: Number,
  title: String,
  root: String,
  isDisabled: Boolean
})

</script>
<template>
  <RouterLink 
    :to="{ name: 'quest'+props.number }" 
    :class="{ 'link-disable': props.isDisabled }"
  >
    <ButtonPart 
      class="menu-button" 
      :class="{ completed: props.isCompleted }"
      :is-disabled="props.isDisabled"
    >
      <div class="wrap-text">
        <p class="quest-number">Quest{{ props.number }}</p>
        <p class="quest-title">{{ props.title }}</p>
      </div>
      <div class="wrap-complete-stamp">
        <div v-if="props.isCompleted" class="complete-stamp">
          <p class="complete-stamp-text">Clear!</p>
        </div>
      </div>
    </ButtonPart>
  </RouterLink>
</template>

<style scoped>
.link-disable {
  pointer-events: none;
}

.menu-button {
  padding-left: 2rem;
}
.completed { 
  background-color: #846B29;
  box-shadow: 0rem 0.4rem rgb(0 0 0 / 30%);
}

.wrap-text {
  text-align: left;
}

.wrap-complete-stamp {
  width: 5rem;
}

.complete-stamp {
  width: 5rem;
  height: 5rem;
  border: solid #C9A444;
  border-radius: 50%;
  color: #C9A444;
  display: flex;
  justify-content: center;
  align-items: center;
}

.complete-stamp-text {
  font-size: 1rem;
}

.quest-number {
  font-size: 1.5rem;
}

.quest-title {
  font-size: 2rem;
}
</style>

