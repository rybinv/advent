<template>
    <div class="modal flex">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
</template>
  
<script lang="ts" setup>

</script>
  
<style scoped>
.modal {  
    max-width: 95vw;
    z-index: 99;
    padding: 40px;
    gap: 40px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(10, 32, 82, 0.2);
}
@media (max-width: 500px) {
  .modal {
    padding: 24px 20px 24px 20px;
  }
}

</style>
  