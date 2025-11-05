<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Знаете ли Вы, что бренд Axe в целом ряде стран, таких как, 
                Соединенное Королевство, Новая Зеландия и Австралия продается под торговым наименованием LYNX (Рысь), 
                что связано с возможностью владения брендом в этих странах. Также в некоторых странах (как ЮАР) до 2002 года бренд назывался EGO, 
                но позже прошла унификация на глобальном уровне и бренд EGO уже забыли.
            </p>
            <div class="flex justify-end">
                <Like class="mr-5" :event_id="props.event_id" />
            </div>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/axe.jpg";
import { defineProps } from 'vue';
import Like from "@/components/Like.vue";

const emit = defineEmits(['close', 'quiz']);

const props = defineProps({
    event_id: String
});


function close() {
    emit('close');
}

</script>

<style lang="scss">


</style>