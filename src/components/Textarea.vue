<template>
    <div class="textarea-container">
      <label :for="textareaId" class="mb-0.5">{{ props.label }}</label>
      <div class="textarea-wrapper">
        <textarea :class="[{ 'textarea-error': props.status }]" :id="props.textareaId" :placeholder="props.placeholder" :value="textareaValue" @input="updateValue($event.target as HTMLTextAreaElement)"/>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    textareaId: {
      type: String,
      default: 'myTextarea'
    },
    label: String,
    placeholder: String,
    status: Boolean
  });
  
  const textareaValue = ref('');
  const emit = defineEmits(['update:value']);
  
  const updateValue = (value: HTMLTextAreaElement) => {
    textareaValue.value = value.value;
    emit('update:value', textareaValue);
  };
  </script>
  
  <style scoped lang="scss">
  .textarea-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .textarea-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  textarea {
    resize: none !important;
    width: 100%;
    min-height: 120px; /* Минимальная высота для текстареа */
    padding: 8px;
    border-radius: 8px;
    background: rgba(10, 32, 82, 0.06);
    resize: vertical; /* Позволяет изменять размер только вертикально */
  }
  
  textarea::placeholder {
    color: #667493;
  }
  
  .textarea-error{
    border: 1px solid red !important;
    background: #fde6eb !important;
  }
  </style>
  