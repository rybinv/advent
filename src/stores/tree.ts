import { defineStore } from 'pinia';
import WishApi from '@/services/TreeApi.ts';
import { ref, computed } from 'vue';

export const useTreeStore = defineStore('wish', () => {
  const status = ref('idle');
  const _wishes = ref(null);

  const wishes = computed({
    get: async () => {
      if (!_wishes.value) {
        await getWishes();
      }
      return _wishes.value;
    },
    set: () => {}
  });

  const createWish = async (data: any) => {
    status.value = 'loading';
    try {
      await WishApi.createWish(data);
      status.value = 'success';
    } catch (error) {
      status.value = 'error';
      throw error;
    }
  };

  const getWishes = async () => {
    status.value = 'loading';
    try {
      const response = await WishApi.getWishes();
      _wishes.value = response.data;
      status.value = 'success';
    } catch (error) {
      status.value = 'error';
      throw error;
    }
  };

  return {
    status,
    wishes,
    createWish,
    getWishes
  };
});
