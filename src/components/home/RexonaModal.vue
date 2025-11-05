<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Белым пятнам не место на твоей одежде, как и белым пятнам в твоих знаниях!<br>
                Узнай больше о Rexona в нашей игре!
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
import img from "@/assets/pics/rexona.jpg";

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