<template>
    <div class="flex justify-center items-center fixed h-dvh w-dvw modal-block fixed top-0 bottom-0 right-0 left-0">
        <div>
            <Modal>
                <ThanxQuiz v-if="isThanxOpen" @close="QuizClose"/>
                <div v-else>
                    <!-- <h1>#QUIZ</h1> -->
                    <h2 class="discription mt-5">{{ question }}</h2>
                    <div v-if="imageUrl" class="mt-5">
                        <img :src="imageUrl" class="quiz-image"/>
                    </div>
                    <div class="mt-5">
                        <Option
                            v-for="answer in answers"
                            :key="answer.id"
                            :text="answer.option_text"
                            :isActive="activeUuid === answer.id"
                            @click="setActive(answer.id)"
                            :class="{ 'disabled-option': isSubmitted }"
                        />
                    </div>
                    <div v-if="isSubmitted" class="mt-5 text-green-500" :class="{ 'text-green-500': correctUuid === activeUuid, 'text-red-500': correctUuid !== activeUuid }">Правильный вариант: {{ correctText }}</div>
                    <div class="flex justify-between mt-10">
                        <TButton text="Закрыть квиз" @click="QuizClose"/>
                        <Button :disabled="loading" text="Ответить" @click="sendAnswer()"/>
                    </div>
                </div>
            </Modal>
        </div>
    </div>  
</template>
  
<script lang="ts" setup>
import Modal from "@/components/Modal.vue";
import Button from "@/components/VButton.vue";
import TButton from "@/components/TransparentButton.vue";
import ThanxQuiz from "@/components/ThanxQuiz.vue";
import { onMounted, onUnmounted } from 'vue';
import Option from "@/components/Option.vue";
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { defineProps } from 'vue';
import QuizApi from "@/services/QuizApi";


const MEDIA_URI = import.meta.env.VITE_APP_MEDIA_URI;

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const URL_PREFIX = VITE_BACKEND_URL + MEDIA_URI;

const props = defineProps({
    quiz_id: String,
});

interface Answer {
  id: string;
  option_text: string;
}

const loading = ref(false);
const isSubmitted = ref(false);
const correctUuid = ref<null | string>(null);
const correctText = ref<null | string>(null);
const isThanxOpen = ref(false);
const question = ref('');
const answers = ref<Answer[] | null>(null);
const activeUuid = ref< null | String >(null);
const imageUrl = ref<string>('');


(async () => {
    await next()
})();

async function next() {
    try {
        loading.value = true;
        const response = await QuizApi.getQuestion(props.quiz_id!);
        console.log(response);
        question.value = response.question_text;
        answers.value = response.quiz_option;
        activeUuid.value = response.quiz_option[0].id
        if (response.image) {
            imageUrl.value = URL_PREFIX + response.image;
        }
        isSubmitted.value = false;
        loading.value = false;
    } catch (error) {
        loading.value = false;
        console.error('Ошибка при получении ответов:', error);
        isThanxOpen.value = true;
        localStorage.setItem(props.quiz_id!, "1")
    }
}

async function sendAnswer() {
    loading.value = true;
    if(isSubmitted.value) {
        await next()
    } else {
        var r = await QuizApi.postAnswer({quiz_id: String(props.quiz_id!), option_id: String(activeUuid.value)});
        isSubmitted.value = true;
        correctText.value = r.data.id.option_text;
        correctUuid.value = r.data.id.id;
        if (r.data.next_image) {
            imageUrl.value = URL_PREFIX + r.data.next_image;
        }
    }
    loading.value = false;
}

const setActive = (uuid: string) => {
  if (activeUuid.value === uuid) {
    activeUuid.value = null;
  } else {
    activeUuid.value = uuid;
  }
};

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

.modal-block {
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
}

.discription{
    width: 550px;
}
@media (max-width: 450px) {
    .discription{
        width: auto;
    }
    
}

.quiz-image {
    max-width: 100%;
    max-height: 250px;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
}

.disabled-option {
  pointer-events: none;
  opacity: 0.5; /* Добавляет эффект "заблокированного" */
}
</style>

<!-- пример использования в родительском компоненте
<button @click="showModal">КЛИИИИИКНИИИИ</button>
<Quiz v-if="isQuizOpen" @close="isQuizOpen = false"/>

import Quiz from "@/components/Quiz.vue";
import { ref } from 'vue';

const isQuizOpen = ref(false);

const showModal = () => {
    isQuizOpen.value = !isQuizOpen.value;
}; -->
  