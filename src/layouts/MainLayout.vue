<template>
    <div class="background">
      <RouterView />
      <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.background {
    background-image: url('@/assets/wall.png');
    background-size: cover;
    background-position: top;
    left: 0;
    right: 0;
    height: 100%;
}
</style>
