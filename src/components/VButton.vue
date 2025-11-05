<template>
    <button class="blue-button button-text" :class="{ 'disabled-button': props.disabled }" :disabled="props.disabled">
      {{ props.text }}
    </button>
</template>
  
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
  
</script>
  
<style scoped lang="scss">
.blue-button {
    background-color: #0A2052;
    width: auto;
    height: 40px;
    padding: 8px 16px;
    gap: 10px;
    border-radius: 8px;
    color: white;
    border: none;
    cursor: pointer;
    text-align: center;

    &.disabled-button {
        background-color: #A0AEC0; // Серый цвет для неактивной кнопки
        cursor: not-allowed;
    }
}

.blue-button:hover {
    background-color: #214EB4;
    &:disabled {
        background-color: #A0AEC0; // Убедитесь, что цвет не меняется при наведении, если кнопка неактивна
    }
}
  
</style>
  