<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info text-center">
            <p>
                Внимательны ли вы к мелочам? Давайте узнаем это в нашей уникальной квиз-игре по «суперчисто.рф»!<br> <br> 
                <a class="info">Среди всех, кто ответит на вопросы правильно, мы разыграем 3 набора мерча категории Home Care!</a>
            </p>
        </div>
        <div class="w-full flex justify-center items-center mt-5">
            <Button text="Перейти к квизу" @click="quiz()"/>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import Button from "@/components/VButton.vue";
import img from "@/assets/pics/superClean.png";

const emit = defineEmits(['close', 'quiz']);


function close() {
    emit('close');
}

function quiz() {
    emit('quiz');
    close();
}
</script>

<style lang="scss">


</style>