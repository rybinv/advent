<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                А сегодня небольшая викторина-квиз от нашего любимого корпоративного интернет-магазина Unishop, 
                который радует нас возможностью приобрести продукцию Юнилевер со скидками!<br>
                И, конечно же, какая викторина без призов - среди правильно ответивших на все вопросы мы случайным образом выберем 5 победителей и вручим призы!
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
import img from "@/assets/pics/unishop.png";

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