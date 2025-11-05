<template>
    <FactModal class="fact-component" :img="''" @close="close">
        <h1 v-if="!canWindow">Пожелание уже было отправлено!</h1>
    <div v-else class="main-class">
        <h1 class="mb-10">Добавьте фото к дружному дому!</h1>
        <h2 class="mb-5">Друзья, давайте вместе "построим" наш особенный дружный дом - будем смотреть не на здание, а из здания!<br>
            Делитесь фотографиями вашего вида из окна и смотрите, что видят другие.</h2>
        <div class="upload-area info flex items-center justify-center" @click="triggerFileInput" @drop.prevent="handleDrop" @dragover.prevent>
            Перетащите изображение сюда или нажмите <img class="ml-2" src="@/assets/save.svg" />
            <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" />
        </div>
        <Input
            class="mt-10 mb-10"
            :iconSrc="iconText"
            inputId="nameInput"
            inputType="text"
            label="Подпись"
            placeholder="Ваша подпись"
            v-model:value="formData.name"
        />
        <div class="modal-actions flex flex-col md:flex-row gap-y-2">
            <TButton text="Перейти к дружному дому" @click="reroute" />
            <Button :disabled="isButtonDisabled" text="Отправить пожелание" @click="submitForm" />
        </div>
    </div>
    </FactModal>
</template>
  
<script lang="ts" setup>
import { ref, defineEmits, reactive, computed } from 'vue';
import FactModal from "@/components/FactModal.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/VButton.vue";
import TButton from "@/components/TransparentButton.vue";
import { useRouter, useRoute } from 'vue-router';
import iconText from "@/assets/text.svg";
import Request from "@/services/Request";


const route = useRoute();
const router = useRouter();
const emit = defineEmits(['close', 'quiz']);
const formData = reactive< {name: string, file: File | null} >({ name: '', file: null });
const fileInput = ref< HTMLInputElement | null>(null);
const canWindow = ref(!localStorage.getItem('window'));


function close() {
    emit('close');
}

function reroute() {
    router.push('/house');
    close();
}

if (route.path === '/' && !canWindow.value) {
    reroute();
  }

const isButtonDisabled = computed(() => {
    return !formData.name || !formData.file;
});

async function submitForm() {
    const formDataConst = new FormData();
    if (formData.name) {
        formDataConst.append('fio', formData.name);
    }
    if (formData.file) {
        formDataConst.append('image', formData.file);
    }
    try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/house/create-window`, {
            method: 'POST',
            headers: {
                'Authorization': `${Request.getToken()}` // Используйте Bearer, если это токен Bearer
                // Добавьте другие заголовки здесь, если необходимо
            },
            body: formDataConst,
        });
        localStorage.setItem('window', '1');
        canWindow.value = false;
        reroute();
    } catch (error) {
        console.error('Ошибка при отправке:', error);
    }
}


function handleFileUpload(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
        formData.file = files[0];
        // Обработка файла
    }
}

function handleDrop(event: any) {
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        formData.file = files[0];
        // Обработка файла
    }
}

function triggerFileInput() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}
</script>

<style lang="scss">
.main-class {
    width: 500px;
}
@media (max-width: 800px) {
    .main-class {
        width: 80vw;
    }
}

.upload-area {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
}

.upload-link {
    color: blue;
    text-decoration: underline;
}

.hidden {
    display: none;
}

.modal-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
</style>
  