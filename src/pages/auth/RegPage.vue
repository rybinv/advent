<template>
    <div class="flex justify-center items-center inset-0 min-h-dvh">
      <div class="back md:block hidden"  @click="redirectToLogin">
        <img src="@/assets/arrow.svg" class="w-2.5" />
      </div>
        <Modal class="mt-4 sm:mt-0 mb-4 sm:mb-0">
          <div class="mb-8">
            <div class="flex gap-5">
              <img src="@/assets/arrow.svg" class="w-3 mb-2 block md:hidden" @click="redirectToLogin"/>
              <h1 class="mb-3">Регистрация аккаунта</h1>
            </div>
            <h2>Введите ваши данные для успешной регистрации</h2>
          </div>
          <div v-if="errorPasswordsMatching || emailError || emailDomainError" class="error-message mb-5">
            <a v-if="emailDomainError">Не корпоративная почта, требуется ID-номер</a>
            <a v-if="emailError">Почта или ID-номер уже зарегистрированы</a>
            <a v-if="errorPasswordsMatching" >Пароли не совпадают!</a>
          </div>
          <div class="gap-5 mb-10">

            <div class="flex flex-col sm:flex-row mb-5 gap-5 w-full">
            <Input
                :iconSrc="email"
                inputId="emailInput"
                inputType="email"
                label="Электронная почта"
                :placeholder="'Введите ваш ' + (!secondForm ? 'корпоративный' : '') + ' E-Mail'"
                v-model:value="formData.email"
                :status="emailError"
            />
            <Input
                v-if="secondForm"   
                :iconSrc="tabel"
                inputId="numberInput"
                inputType="text"
                label="ID-номер"
                placeholder="Введите номер"
                v-model:value="formData.personal_number"
                :status="emailError"
            />
            </div>

            <div class="flex flex-col sm:flex-row mb-5 gap-5 w-full">
                <Input
                    :iconSrc="''"
                    inputId="nameInput"
                    inputType="text"
                    label="Имя"
                    placeholder="Введите имя"
                    v-model:value="formData.name"
                    :status="false"
                />
                <Input
                    :iconSrc="''"
                    inputId="secondnameInput"
                    inputType="text"
                    label="Фамилия"
                    placeholder="Введите фамилию"
                    v-model:value="formData.secondname"
                    :status="false"
                />
            </div>

            <div class="mb-5">
              <CitySelector label="Город" placeholder="Выберете город" v-model="formData.city" />
            </div>

            <div class="flex flex-col sm:flex-row mb-5 gap-5 w-full">
                <Input
                    :iconSrc="password"
                    inputId="passwordInput"
                    inputType="password"
                    label="Придумайте пароль"
                    placeholder="Пароль"
                    v-model:value="formData.password"
                    :status="errorPasswordsMatching"
                />
              <Input
                :iconSrc="password"
                inputId="secondPasswordInput"
                inputType="password"
                label="Повторите новый пароль"
                placeholder="Повторите пароль"
                v-model:value="formData.secondPassword"
                :status="errorPasswordsMatching"
              />
            </div>
          </div>

          <div class="policy ">
            <div class="mb-5 flex gap-2">
                <Radio @click="check1" />
                <a class="policy-text">Вы подтверждаете, что являетесь сотрудником ООО Юнилевер Русь, ООО Инмарко-трейд, ООО Решения для будущего или сотрудником 3 стороны</a>
            </div>
            <div class="flex gap-2">
                <Radio @click="check2" />
                <a class="policy-text">Нажимая на кнопку "Регистрация аккаунта" вы подтверждаете свое <a class="underlined-text" href="https://www.unilever.ru/privacy-notice-rus">согласие на обработку персональных данных</a>. Согласие предоставляется ООО "Юнилевер Русь" и его партнеру ООО «Аэроклуб Тур»</a>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center items-center mt-5">
            <a class="href flex justify-center items-center sm:mr-5 mb-5 sm:mb-0" @click="swapForm">У меня нет корпоративной почты</a>
            <Button @click="submitForm" text="Зарегистрироваться" :disabled="isFormIncomplete || loading" />
          </div>
        </Modal>
    </div>
  </template>
  
<script lang="ts" setup>
import Modal from "@/components/Modal.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/VButton.vue";
import CitySelector from "@/components/CitySelector.vue";
import Radio from "@/components/Radio.vue";
import email from "@/assets/email.svg";
import tabel from "@/assets/tabel.svg";
import password from "@/assets/password.svg";
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import UserApi from "@/services/UserApi";


const router = useRouter();
const emailError = ref(false);
const emailDomainError = ref(false);
const secondForm = ref(false);
const loading = ref(false);
const errorPasswordsMatching = ref(false);


const formData = reactive({
  email: '',
  password: '',
  secondPassword : '',
  name: '',
  secondname: '',
  city: '',
  personal_number: '',
  check1: false,
  check2: false
});

const check1 = () => {
  formData.check1 = !formData.check1;
}
const check2 = () => {
  formData.check2 = !formData.check2;
}

const isValidEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

const isCorporateEmail = () => {
  const emailDomain = formData.email.split('@')[1];
  return emailDomain === import.meta.env.VITE_CORP_EMAIL_DOMAIN;
};

const isFormIncomplete = computed(() => {
  // Проверка обязательных полей формы
  const fieldsIncomplete = !formData.email ||
                           !formData.password || 
                           !formData.secondPassword || 
                           !formData.name || 
                           !formData.secondname || 
                           !formData.city;
  // Проверка чекбоксов
  const checkboxesUnchecked = !formData.check1 || !formData.check2;
  // Проверка необязательного поля, если secondForm равно true
  const optionalFieldIncomplete = secondForm.value && !formData.personal_number;
  
  return fieldsIncomplete || checkboxesUnchecked || optionalFieldIncomplete;
});

const isPasswordMatch = () => {
    return formData.password === formData.secondPassword;
}

const register = async () => {
  await UserApi.register(formData)
  .then((r) => {
    if (r.status == 400){
      emailError.value = true;
      console.log(r);  
    } else {
      redirectToLogin();
    }
  })
};

const checkHandler = () => {
    if (!isValidEmail(formData.email)) {
        emailError.value = true;
        emailDomainError.value = false;
        errorPasswordsMatching.value = false;
        return false;
    }
    if (!isCorporateEmail() && !formData.personal_number) {
        emailDomainError.value = true;
        emailError.value = false;
        errorPasswordsMatching.value = false;
        return false;
    }
    if (!isPasswordMatch()) {
        errorPasswordsMatching.value = true;
        emailError.value = false;
        emailDomainError.value = false;
        return false;
    }
    return true;
}

const submitForm = async () => {
  try{
    loading.value = true;
    if (checkHandler()) {
      await register();
    }
  } finally {
  loading.value = false;
  }
};


const swapForm = () => {
    secondForm.value = !secondForm.value;
};

const redirectToLogin = () => {
  router.push('/login');
};


</script>
  
<style scoped lang="scss">

.error-message {
  background: rgba(238, 51, 84, 0.12);
  max-width: 480px;
  padding: 12px;
  gap: 10px;
  border-radius: 8px;
  opacity: 0px;
  color: rgba(238, 51, 84, 1);
}
.policy {
    max-width: 480px;
}
.radio {
    min-height: 20px;
    max-height: 20px;
    min-width: 20px;
    max-width: 20px;
    margin-right: 5px;
    background-color: grey;
}

.back {
  background-color: white;
  min-height: 50px;
  min-width: 50px;
  margin: 15px;
  border-radius: 14px;
  padding: 8px;
  margin-bottom: 708px;
  cursor: pointer;
  justify-content: center; /* Центрирует содержимое по горизонтали */
  align-items: center; /* Центрирует содержимое по вертикали */

}
</style>