<template>
  <div class="input-container">
    <label :for="inputId" class="mb-0.5">{{ props.label }}</label>
    <div class="input-wrapper">
      <span class="icon" v-if="props.iconSrc">
        <img :src="props.iconSrc" />
      </span>
      <input :class="[{ 'input-error': props.status }]" :id="props.inputId" :type="props.inputType" :placeholder="props.placeholder" :value="inputValue" @input="updateValue($event.target as HTMLInputElement)"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';


const props = defineProps({
  iconSrc: String,
  inputId: {
    type: String,
    default: 'myInput'
  },
  inputType: {
    type: String,
    default: 'text'
  },
  label: String,
  placeholder: String,
  status: Boolean
});

const inputValue = ref< HTMLInputElement | string>('');
const emit = defineEmits(['update:value']);


const updateValue = (value: HTMLInputElement) => {
  inputValue.value = value.value;
  emit('update:value', inputValue);
};
</script>


<style scoped lang="scss">
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  height: 40px;
  padding: 8px 8px 8px 38px;
  border-radius: 8px;
  background: rgba(10, 32, 82, 0.06);
}

input::placeholder {
  color: #667493;
}

.icon {
  position: absolute;
  left: 10px;
}

.input-error{
  border: 1px solid red !important;
  background: #fde6eb !important;
}
</style>
