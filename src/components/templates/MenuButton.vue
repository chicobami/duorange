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
      <div class="wrap-text">
        <p class="quest-number">Quest{{ props.number }}</p>
        <p class="quest-title">{{ props.title }}</p>
      </div>
      <div class="wrap-complete-stamp">
        <div class="complete-stamp">
          clear
        </div>
      </div>
    </ButtonPart>
  </RouterLink>
</template>

<style scoped>
.completed { 
  background-color: #846B29;
  box-shadow: 0rem 0.4rem rgb(0 0 0 / 30%);
}

.wrap-text {
  text-align: left;
}

.wrap-complete-stamp {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}

.quest-number {
  font-size: 1.5rem;
}

.quest-title {

}
</style>

