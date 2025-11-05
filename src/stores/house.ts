import { defineStore } from 'pinia';
import WindowApi from '@/services/HouseApi.ts';
import { ref, computed } from 'vue';

export const useHouseStore = defineStore('window', () => {
  const status = ref('idle');
  const _windows = ref(null);

  const windows = computed({
    get: async () => {
      if (!_windows.value) {
        await getWindows();
      }
      return _windows.value;
    },
    set: () => {}
  });

  const createWindow = async (data: any) => {
    status.value = 'loading';
    try {
      const response = await WindowApi.createWindow(data);
      status.value = 'success';
      return response.data;
    } catch (error) {
      status.value = 'error';
      throw error;
    }
  };

  const getWindows = async () => {
    status.value = 'loading';
    try {
      const response = await WindowApi.getWindows();
      _windows.value = response.data;
      status.value = 'success';
    } catch (error) {
      status.value = 'error';
      throw error;
    }
  };

  return {
    status,
    windows,
    createWindow,
    getWindows
  };
});
