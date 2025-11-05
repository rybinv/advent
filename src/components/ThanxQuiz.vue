<template>
    <div>
        <h1 class="title text-center max-w-72">Спасибо за участие!<br>
            Предлагаем вам ознакомиться с другими ячейками</h1>
        <div class="flex justify-center items-center mt-10">
            <TButton text="Закрыть квиз" @click="QuizClose"/>
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