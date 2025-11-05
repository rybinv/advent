<template>
    <div class="flex justify-center items-center fixed modal-block fixed top-0 bottom-0 right-0 left-0">
        <div class="flex flex-col md:flex-row items-center justify-center fact-modal">
            <Modal class="">
                <div class="flex justify-center">
                    <img :src="props.img" class="img"/>
                </div>
                <slot></slot>
            </Modal>
            <img @click="QuizClose" :src="X" class="ex mb-auto ml-5 mt-5 cursor-pointer" >
        </div>
    </div>  
</template>
  
<script lang="ts" setup>
import Modal from "@/components/Modal.vue";
import { onMounted, onUnmounted } from 'vue';
import { defineEmits } from 'vue';

import X from "@/assets/X.svg";


const props = defineProps({
    img: String
});

const emit = defineEmits(['close']);


const QuizClose = () => {
    emit('close');
};


let savedScrollPosition = 0;

onMounted(() => {
  // Сохраняем текущую позицию скролла
  savedScrollPosition = window.scrollY;
  // Фиксируем скролл на странице
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  // Возвращаем скролл на сохраненную позицию
  document.body.style.overflow = '';
  window.scrollTo(0, savedScrollPosition);
});
</script>
  
<style scoped>

.img {
    max-width: 100%;
    border-radius: 20px;
    max-height: 250px;
}

.modal-block {
    min-height: 100vh;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
}

.discription{
    max-width: 550px;
}
.fact-modal {
    max-width: 550px;
}
</style>

<!-- пример использования
import img from "@/assets/authBack.png";
import FactModal from "@/components/FactModal.vue";
import { ref } from 'vue';

const isQuizOpen = ref(true);

<FactModal 
v-if="isQuizOpen" 
@close="isQuizOpen = false" 
text="'Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой'" 
:img="img"
/> -->