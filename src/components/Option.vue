<template>
    <div class="answer-item info flex items-center">
        <div class="border-box">
            <div class="point" :style="{ opacity: props.isActive ? 1 : 0 }"></div>
        </div>
        <a>{{ props.text }}</a>
    </div>
</template>
  
<script lang="ts" setup>
import { defineProps } from 'vue';


const props = defineProps({
    text: String,
    isActive: Boolean
});



</script>
  
<style scoped>
.border-box {
    min-height: 15px;
    min-width: 15px;
    max-height: 15px;
    max-width: 15px;
    margin: 8px;
    border: 2px solid #6c7997;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.point {
    min-width: 7px;
    min-height: 7px;
    max-width: 7px;
    max-height: 7px;
    background-color: #0a2052;
    border-radius: 100%;
    transition: opacity 0.3s;
}
</style>
  