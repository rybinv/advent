import { defineStore } from 'pinia';
import QuizApi from '@/services/QuizApi.ts';
import { ref } from 'vue';

export const useQuizStore = defineStore('quiz', () => {
  const status = ref('idle');

  const getQuestion = async (data: any) => {
    status.value = 'loading';
    try {
      const response = await QuizApi.getQuestion(data);
      status.value = 'success';
      return response.data;
    } catch (error) {
      status.value = 'error';
      return null;
    }
  };

  const postAnswer = async (data: any) => {
    status.value = 'loading';
    try {
      const response = await QuizApi.postAnswer(data);
      status.value = 'success';
      return response.data;
    } catch (error) {
      status.value = 'error';
      throw error;
    }
  };

  return {
    status,
    getQuestion,
    postAnswer
  };
});
