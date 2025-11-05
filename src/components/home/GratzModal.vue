<template>
    <FactModal 
        class="fact-component"
        :img="''"
        @close="close" 
    > 
    <p>Поздравление от управляющего состава Unilever <br>в России</p>
        <div class="scrollable-text mt-2 info">
            <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SpOQu6mf-38?si=pTfKE1E6-q_qA267" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <br>
        <div class="flex justify-end">
                <Like class="mr-5" :event_id="props.event_id" />
            </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import { defineProps, defineEmits } from 'vue';
import Like from "@/components/Like.vue";



const emit = defineEmits(['close', 'quiz']);

function close() {
    emit('close');
}

const props = defineProps({
    event_id: {
        type: String,
        required: true
    }
});

</script>

<style lang="scss">

.video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
            max-width: 100%;
            background: #000;
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }

        /* Optional: Increase the padding for larger screens */
        @media (min-width: 768px) {
            .video-container {
                padding-bottom: 75%; /* Adjust for different aspect ratios if needed */
            }
        }

</style>