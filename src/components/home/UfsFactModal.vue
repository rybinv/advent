<template>
    <FactModal 
        class="fact-component"
        :img="''"
        @close="close" 
    > 
        <div class="flex justify-center">
            <img :src="img" class="ufsImg"/>
        </div>
        <div class="scrollable-text mt-2 info">
            <p>
                По всему миру работает более 250 поваров в Unilever Food Solutions, 
                при этом в 2021 году наш Кирилл Шкуратов из Новосибирска вошел в ТОП-2 лучших шефов во всём мире!
            </p>
        </div>
            <div class="flex justify-end">
                <Like class="mr-5" :event_id="props.event_id" />
            </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/manBIG.jpg";
import Like from "@/components/Like.vue";
import { defineProps } from 'vue';


const emit = defineEmits(['close', 'quiz']);

const props = defineProps({
    event_id: String
});

function close() {
    emit('close');
}


</script>

<style lang="scss">
.ufsImg {
    max-height: 400px;
    border-radius: 8px;
}
@media (max-width: 450px) {
    .ufsImg {
        max-height: 300px;
    }
}

</style>