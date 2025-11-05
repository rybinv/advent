import { defineStore } from 'pinia';
import UserApi from '@/services/UserApi.ts';
import { ref } from 'vue';
import Request from "@/services/Request.ts"


export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const status = ref('idle');

  const login = async (data: any) => {
    status.value = 'loading';
    try {
        const response = await UserApi.login(data);
        Request.rememberToken(response.token);
        status.value = 'success';
        return response;
    } catch (error) {
        status.value = 'error';
        throw error;
    }
  };

  const register = async (data: any) => {
    status.value = 'loading';
    try {
      await UserApi.register(data);
      status.value = 'success';
    } catch (error) {
      status.value = 'error';
      throw error;
    }
  };

  return {
    user,
    status,
    login,
    register
  };
});
