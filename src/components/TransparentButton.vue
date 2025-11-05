<template>
    <button class="transparent-button button-text">
      {{ props.text }}
        <slot></slot>
    </button>
</template>
  
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: ""
    }
});
  
</script>
  
<style scoped lang="scss">
.transparent-button {
    background-color: transparent;
    width: auto;
    height: 40px;
    padding: 8px 16px;
    gap: 10px;
    border-radius: 8px;
    color: #0A2052;
    border: 1px solid #0A2052;
    cursor: pointer;
    text-align: center;
}
.transparent-button:hover {
    background-color: #0A2052;
    color: #fff;
}
  
</style>
  