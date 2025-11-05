<template>
    <div>
        <div class="flex flex-col justify-center items-center">
            <slot></slot>
            <TButton text="Закрыть" @click="QuizClose" class=" mt-10"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import TButton from "@/components/TransparentButton.vue";
import { defineEmits } from 'vue';



const emit = defineEmits(['close']);

const QuizClose = () => {
    emit('close');
};

</script>
  
<style scoped>

.title {
    width: 550px;
}

</style>