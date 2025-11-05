<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text3 mt-2 info">
            <p>
                Любить мороженое и хорошо знать его — это разные вещи!<br>
                Узнайте больше интересных фактов о своём любимом мороженом в нашей следующей игре!
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
import img from "@/assets/pics/icecream.jpg";

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

.scrollable-text3 {
    width: 550px;
}
@media (max-width: 800px) {
    .scrollable-text3 {
        width: auto;
    }
}
</style>