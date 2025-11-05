<template>
    <div class="flex justify-center items-center inset-0 min-h-dvh">
        <Modal class="mt-4 sm:mt-0 mb-4 sm:mb-0">
          <div class="mb-8">
            <h1 class="mb-3">Вход в аккаунт</h1>
            <h2>Введите данные для входа в аккаунт</h2>
          </div>
          <div v-if="loginError || emailError" class="error-message mb-5">
            <a v-if="emailError && !loginError" >Некорректная почта</a>
            <a v-else >Неверная почта или пароль</a>
          </div>
          <div class="gap-5">
            <div class="mb-5">
              <Input
                :iconSrc="email"
                inputId="emailInput"
                inputType="email"
                label="Электронная почта"
                placeholder="Введите ваш E-Mail"
                v-model:value="formData.email"
                :status="emailError"
              />
            </div>
            <div>
              <Input
                :iconSrc="password"
                inputId="passwordInput"
                inputType="password"
                label="Пароль"
                placeholder="Введите пароль"
                v-model:value="formData.password"
                :status="loginError"
              />
            </div>
          </div>
          <div class="flex justify-center mt-7">
            <Button @click="submitForm" text="Вход в аккаунт" />
          </div>
          <div class="flex flex-col sm:flex-row items-center justify-center mt-5">
            <a class="help flex justify-center">У вас нет аккаунта? Пройдите простую</a>
            <a class="href ml-2 flex justify-center" @click="redirectToRegistration">Регистрацию</a>
          </div>
          
        </Modal>
    </div>
  </template>
  
<script lang="ts" setup>
import UserApi from "@/services/UserApi";
import Request from "@/services/Request";
import Modal from "@/components/Modal.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/VButton.vue";
import email from "@/assets/email.svg";
import password from "@/assets/password.svg";
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const loginError = ref(false);
const emailError = ref(false);

const formData = reactive({
  email: '',
  password: ''
});

const isValidEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

const login = async () => {
  await UserApi.login({ "email": formData.email, "password": formData.password })
  .then((r) => {
    if (r.status == 400){
      loginError.value = true;
      emailError.value = true;
      console.log(r);      
    } else {
      Request.rememberToken(r.data.token);
      router.push('/');
    }
  })
};


const submitForm = () => {
  if (isValidEmail(formData.email)) {
    login();
  } else {
    emailError.value = true;
  }
};

const redirectToRegistration = () => {
  router.push('/registration');
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

</style>