<template>
    <div class="radio-button" @click="toggle">
      <div
        class="inner-square"
        :style="{ backgroundColor: isChecked ? 'rgba(10, 32, 82, 1)' : 'rgb(218, 95, 95)' }"
      ></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isChecked = ref(false);
  
  function toggle() {
    isChecked.value = !isChecked.value;
  }
  </script>
  
  <style scoped>
  .radio-button {
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    background-color: rgba(10, 32, 82, 0.06);
    border-radius: 4px; /* полузакругление для внешнего квадрата */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .inner-square {
    min-width: 11px;
    min-height: 11px;
    max-width: 11px;
    max-height: 11px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }
  </style>
  