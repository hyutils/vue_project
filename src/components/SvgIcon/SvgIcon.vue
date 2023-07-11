<template>
  <svg :style="{ width, height }">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: 'pink',
  },
  height: {
    type: String,
    default: '16px',
  },
  width: {
    type: String,
    default: '16px',
  },
});
</script>

<style scoped></style>
