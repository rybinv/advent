<template>
    <!-- <FactModal 
        class="fact-component"
        :img="''"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            HouseModal
        </div>
        <Button text="Перейти к дому" @click="reroute()"/>
    </FactModal> -->
    <SendHouseModal @close="close()" />
</template>

<script lang="ts" setup>
// import FactModal from "@/components/FactModal.vue";
// import Button from "@/components/VButton.vue";
// import { useRouter } from 'vue-router';
import SendHouseModal from "@/components/SendHouseModal.vue";
// import { ref } from 'vue';


// const router = useRouter();
const emit = defineEmits(['close', 'quiz']);
// const isSendFormOpen = ref(true);


function close() {
    emit('close');
}


// function reroute() {
//     router.push('/house');
// }
</script>

<style lang="scss">


</style>