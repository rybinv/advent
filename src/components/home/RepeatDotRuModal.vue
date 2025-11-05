<template>
    <FactModal 
        class="fact-component"
        :img="''"
        @close="close" 
    > 
        <QuizColored  v-if="isQuizColoredOpen" @close="isQuizColoredOpen = false; close()" />
        <div v-else >
            <img class="imgRepeat" :src="img" />
            <div class="scrollable-text mt-2 info">
                <p>
                    На сайте Repeat уже более 500 статей об уходе за кожей и волосами, профессиональных бьюти-процедурах, 
                    ментальном и физическом здоровье, экологичных привычках и сбалансированном рационе.<br>
                </p><br>
                <p>С чего начать?</p><br>
                <p>Пройдите тест, чтобы узнать, кто вы в мире бьюти, а мы подскажем, какая рубрика вас заинтересует в первую очередь.</p>
            </div>
            <div class="w-full flex justify-center items-center mt-5">
                <Button text="Перейти к квизу" @click="quiz()"/>
            </div>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import QuizColored from "@/components/QuizColored.vue";
import FactModal from "@/components/FactModal.vue";
import Button from "@/components/VButton.vue";
import { ref } from 'vue';
import img from '@/assets/pics/repit.jpeg'

const emit = defineEmits(['close', 'quiz']);

const isQuizColoredOpen = ref(false);

function close() {
    emit('close');
}

function quiz() {
    isQuizColoredOpen.value = true;
}
</script>

<style lang="scss">
.imgRepeat {
    max-width: 100%;
    border-radius: 20px;
    max-height: 250px;
}

</style>