<template>
    <FactModal 
        class="fact-component"
        :img="''"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            CrosswordModal
        </div>
        <Button text="Перейти к кроссворду" @click="reroute()"/>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import Button from "@/components/VButton.vue";
import { useRouter } from 'vue-router';


const router = useRouter();
const emit = defineEmits(['close', 'quiz']);


function close() {
    emit('close');
}


function reroute() {
    router.push('/crossword');
}
</script>

<style lang="scss">


</style>