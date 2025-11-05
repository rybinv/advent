<template>
    <div class="like"  @click="sendLike">
        <img :src="currentImg" class="h-8 likeImg" />
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import EventsApi from "@/services/EventsApi";
import { ref } from 'vue';
import img from "@/assets/like2.svg";
import imgA from "@/assets/like_a2.svg";



const props = defineProps({
    event_id: String
});

const isLiked = ref(!!localStorage.getItem(`event-${props.event_id}`));

const currentImg = ref(isLiked.value ? imgA : img);

async function sendLike() {
    if (isLiked.value) return;
    var r = await EventsApi.createLike({event_id: props.event_id});
    if (r.status !== 201) return;
    localStorage.setItem(`event-${props.event_id}`, "1");
    isLiked.value = true;
    currentImg.value = imgA;
}

</script>
  
<style lang="scss" scoped>
.like {
    cursor: pointer;
    background-color: rgba(10, 32, 82, 1);
    padding: 8px 16px 8px 16px;
    gap: 10px;
    border-radius: 8px;
    opacity: 0px;
}
.likeImg {
    border-radius: 100%;
}

</style>
  