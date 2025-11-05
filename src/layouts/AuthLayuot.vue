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
    background-image: url('@/assets/authBack.png');
    background-size: cover;
    background-position: center;
    left: 0;
    right: 0;
    min-height: 100vh;
}
</style>
