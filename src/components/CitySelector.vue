<template>
    <div class="input-container">
      <label for="citySelector">{{ props.label }}</label>
      <div class="input-wrapper" @click="toggleDropdown">
        <div class="selected-value">{{ selectedCity || props.placeholder }}</div>
        <img :src="arrowIcon" :class="{ 'arrow-flipped': isDropdownOpen }" class="arrow-icon" />
        <div class="dropdown" v-show="isDropdownOpen">
          <div 
            class="dropdown-item" 
            v-for="city in cities" 
            :key="city" 
            @click="selectCity(city)"
            @mouseover="hoverItem(city)"
            :class="{ 'hovered': hoveredCity === city }"
          >
            {{ city }}
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts" setup>
  import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
  import arrow from "@/assets/arrow.svg";

  const emit = defineEmits(['update:modelValue']);

  const props = defineProps({
    label: String,
    placeholder: String,
    modelValue: String
  });
  
  const cities = ref(['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Тула', 'Омск', 'Иной']);
  const selectedCity = ref('');
  const isDropdownOpen = ref(false);
  const hoveredCity = ref< string | null>(null);
  const arrowIcon = arrow // Замените на путь к вашей иконке стрелочки
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const selectCity = (city: string) => {
    selectedCity.value = city;
    emit('update:modelValue', city);
    // isDropdownOpen.value = false; все элементы подпадают под @click="toggleDropdown", при раскомментированой строке оно просто будет переоткрывать селектор
  };
  
  const hoverItem = (city: string) => {
    hoveredCity.value = city;
  };
  
  const closeDropdown = (event: any) => {
    if (!event.target.closest('.input-wrapper')) {
      isDropdownOpen.value = false;
    }
  };
  
  onMounted(() => {
    window.addEventListener('click', closeDropdown);
  });
  
  onUnmounted(() => {
    window.removeEventListener('click', closeDropdown);
  });
</script>
<style scoped>
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.selected-value {
    color: #627190;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  width: 100%;
  height: 40px;
  padding: 8px 8px 8px 38px;
  border-radius: 8px;
  background: rgba(10, 32, 82, 0.06);
}

.arrow-icon {
  position: absolute;
  right: 10px; /* Отступ иконки от правого края */
  transition: transform 0.3s;
}

img {
    transform: rotate(-90deg);
}
.arrow-flipped {
    transform: rotate(-90deg) scaleX(-1);
}

.dropdown {
  position: absolute;
  background-color: white;
  width: 100%;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-radius: 8px;
  z-index: 1000;
  top: 110%; /* Расположение ниже выбранного значения */
  left: 0;
}

.dropdown-item {
    border-radius: 8px;
  padding: 8px 38px;
  transition: background-color 0.3s;
}

.dropdown-item:hover, .dropdown-item.hovered {
  background-color: rgba(10, 32, 82, 0.1);
  border-radius: 8px;
}

</style>