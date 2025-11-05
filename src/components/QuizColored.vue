<template>
    <div class="flex justify-center items-center fixed h-dvh w-dvw modal-block fixed top-0 bottom-0 right-0 left-0">
        <div>
            <Modal>
                <ThanxColoredQuiz v-if="isThanxOpen" @close="QuizClose">
                    <Blue v-if="colorText === 'blue'"/>
                    <Green v-if="colorText === 'green'"/>
                    <Pink v-if="colorText === 'pink'"/>
                    <Yellow v-if="colorText ==='yellow'"/>
                </ThanxColoredQuiz>
                <div v-else>
                    <h2 class="discription mt-5">{{ question }}</h2>
                    <div class="mt-5 max-w-96">
                        <Option
                            v-for="answer in answers"
                            :key="answer.option"
                            :text="answer.option"
                            :isActive="activeAnswer?.option === answer.option"
                            @click="setActive(answer)"
                            :class="{ 'disabled-option': loading }"
                        />
                    </div>
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
if (!localStorage.getItem("quizColoredAnswers")){
    localStorage.setItem("quizColoredAnswers", "0");
}

import Blue from "@/components/coloredQuizComponents/Blue.vue";
import Green from "@/components/coloredQuizComponents/Green.vue";
import Pink from "@/components/coloredQuizComponents/Pink.vue";
import Yellow from "@/components/coloredQuizComponents/Yellow.vue";

import Modal from "@/components/Modal.vue";
import Button from "@/components/VButton.vue";
import TButton from "@/components/TransparentButton.vue";
import ThanxColoredQuiz from "@/components/ThanxColoredQuiz.vue";
import { onMounted, onUnmounted } from 'vue';
import Option from "@/components/Option.vue";
import { ref } from 'vue';
import { defineEmits } from 'vue';
// import { defineProps } from 'vue';
import QuizColoredApi from "@/services/QuizColoredApi";
import questions from"@/components/coloredQuiz.ts";
// import result from"@/components/quizColoredResults.ts";

const emit = defineEmits(['close']);
const QuizClose = () => {
    emit('close');
};

// const props = defineProps({
//     quiz_id: String,
// });

interface ActiveAnswer {
    option: string
    color: string
}


const loading = ref(false);
const colorText = ref('');
const isThanxOpen = ref(false);
const question = ref('');
const answers = ref<{ option: string; color: string }[] | null>(null);
const activeAnswer = ref< null | ActiveAnswer >(null);
const currentIndex = ref(localStorage.getItem("quizColoredAnswers")!);


(async () => {
    await next()
})();


function updateColorValue(color: string) {
    var currentValue = localStorage.getItem(color);
    localStorage.setItem(color, String(Number(currentValue)+1));
}

function pickColorValue(color: string) {
    return Number(localStorage.getItem(color));
}

function getColorWithHighestValue() {
    var colors = ['pink', 'yellow', 'blue', 'green'];
    var highestValue = 0;
    var colorWithHighestValue = '';

    colors.forEach(function(color) {
        var value = pickColorValue(color);
        if (value > highestValue) {
            highestValue = value;
            colorWithHighestValue = color;
        }
    });

    return colorWithHighestValue;
}

async function next() {
    try {
        answers.value = questions[Number(currentIndex.value)].answers;
        activeAnswer.value = questions[Number(currentIndex.value)].answers[0];
        question.value = questions[Number(currentIndex.value)].question;
    } catch {
        isThanxOpen.value = true;
        var color: string = getColorWithHighestValue();
        colorText.value = color;//result[color];
    } 
}

async function sendAnswer() {
    loading.value = true;

    if (activeAnswer.value?.color) {
        updateColorValue(activeAnswer.value.color);
    }
    currentIndex.value = String(Number(currentIndex.value) + 1)
    localStorage.setItem("quizColoredAnswers", currentIndex.value)

    if(Number(currentIndex.value) !== questions.length) {
        await next()
    } else {
        var color: string = getColorWithHighestValue();
        colorText.value = color;//result[color];
        isThanxOpen.value = true;
        await QuizColoredApi.postAnswer({
            color: color
        });
    }
    loading.value = false;
}

const setActive = (answer: ActiveAnswer) => {
  if (activeAnswer.value === answer) {
    activeAnswer.value = null;
  } else {
    activeAnswer.value = answer;
  }
};





let savedScrollPosition = 0;

onMounted(() => {
  savedScrollPosition = window.scrollY;
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
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