<template>
    <!-- <FactModal 
        class="fact-component"
        :img="''"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            TreeModal
        </div>
        <Button text="Перейти к дереву" @click="reroute()"/>
    </FactModal> -->
    <SendWishModal @close="close()" />
</template>

<script lang="ts" setup>
// import FactModal from "@/components/FactModal.vue";
// import Button from "@/components/VButton.vue";
import SendWishModal from "@/components/SendWishModal.vue";
// import { useRouter } from 'vue-router';
// import { ref } from 'vue';


// const router = useRouter();
const emit = defineEmits(['close', 'quiz']);
// const isSendWishOpen = ref(true);

function close() {
    emit('close');
}


// function reroute() {
//     router.push('/tree');
// }
</script>

<style lang="scss">


</style>