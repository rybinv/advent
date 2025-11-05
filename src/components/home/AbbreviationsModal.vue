<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Интересно ли вам узнать, как расшифровываются различные аббревиатуры?<br>
                Проверьте свою логику и знания в нашей необычной игре! 
            </p>

        </div>
        <div class="w-full flex justify-center items-center mt-5">
            <Button text="Перейти к квизу" @click="quiz()"/>
            <!-- <div class="ml-auto">
                    <Like class="mr-5" :event_id="props.event_id" />
            </div> -->
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import Button from "@/components/VButton.vue";
import img from "@/assets/pics/abb.jpg";
// import Like from "@/components/Like.vue";
// import { defineProps } from 'vue';


const emit = defineEmits(['close', 'quiz']);

// const props = defineProps({
//     event_id: String
// });

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