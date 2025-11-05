<template>
    <div class="tree-background">
      <RouterView />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.tree-background {
    background-image: url('@/assets/tree.png');
    background-position: top;
    background-color: rgba(136, 205, 255, 1);
    background-size: cover; /* Масштабируем изображение, чтобы оно полностью покрыло экран */
    background-repeat: no-repeat; /* Избегаем повторения изображения */

    left: 0;
    right: 0;
    min-height: 100vh;

}
</style>
