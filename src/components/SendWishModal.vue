<template>
    <FactModal class="fact-component" :img="''" @close="close">
        <h1 v-if="!canWish">Пожелание уже было отправлено!</h1>
      <div v-else class="main-class">
        <h1 class="mb-1">Оставьте свое пожелание для компании!</h1>
        <h2 class="mb-10">Заполните поля ниже</h2>
        <Textarea
            textareaId="myTextarea"
            label="Ваше пожелание"
            placeholder="Введите ваше пожелание"
            :status="false"
            v-model:value="formData.wish"
        />
        <Input
          class="mt-10 mb-10"
          :iconSrc="iconText"
          inputId="nameInput"
          inputType="text"
          label="Подпись"
          placeholder="Ваша подпись"
          v-model:value="formData.name"
        />
        <div class="modal-actions justify-between flex flex-col md:flex-row gap-y-2">
          <TButton text="Перейти к дереву пожеланий" @click="reroute" />
          <Button :disabled="isButtonDisabled" text="Отправить пожелание" @click="submitForm" />
        </div>
      </div>
    </FactModal>
</template>
  
<script lang="ts" setup>
  import { ref, defineEmits, reactive, computed } from 'vue';
  import FactModal from "@/components/FactModal.vue";
  import Input from "@/components/Input.vue";
  import Textarea from "@/components/Textarea.vue";
  import Button from "@/components/VButton.vue";
  import TButton from "@/components/TransparentButton.vue";
  import { useRouter, useRoute } from 'vue-router';
  import iconText from "@/assets/text.svg";
  import WishApi from "@/services/TreeApi";    


  const router = useRouter();
  const route = useRoute();
  const emit = defineEmits(['close', 'quiz']);
  const formData = reactive({ name: '', wish: '' });
  const canWish = ref(!localStorage.getItem('tree'));
  
  if (route.path === '/' && !canWish.value) {
    reroute();
  }


  function close() {
    emit('close');
  }
  
  function reroute() {
    router.push('/tree');
    close();
  }
  
const isButtonDisabled = computed(() => {
    return !formData.name || !formData.wish;
});
async function submitForm() {
    try {
        await WishApi.createWish({fio: formData.name, wish: formData.wish})
        localStorage.setItem('tree', '1');
        reroute();
    } catch(e) {
        console.log(e)
    }
}
</script>
  
<style lang="scss">
.main-class {
    width: 570px;
}
@media (max-width: 800px) {
    .main-class {
      width: 80vw;
    }
}
</style>
  