<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text2 mt-2 info">
            <p>
                Быть экспертами в заботе за руками - это наш конек! <br>
                А сможете ли вы узнать знаменитых людей имея только фотографию их рук? <br>
                Давайте проверим это в нашей уникальной игре!<br>
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
import img from "@/assets/pics/velvet.jpg";

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
.scrollable-text2 {
    width: 550px;
}
@media (max-width: 800px) {
    .scrollable-text2 {
        width: auto;
    }
}
</style>