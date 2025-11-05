<template>
    <div class="left-0 right-0">
      <img :src="garlandImage" alt="Garland" class="w-full"/>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'


const props = defineProps({
number: {
    type: Number,
}
})

const garlandImage = ref('');


(async () => {
    const module = await import(`@/assets/garland${props.number}.svg`)
    garlandImage.value = module.default
})();

</script>

<style scoped>

</style>
