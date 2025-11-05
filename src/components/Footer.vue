<template>
    <footer class="footer" style="background-color: #0a2052; color: white; padding: 20px 0px 20px 0px; text-align: center;">
    <h2 class="text-white text-2xl">Создаем больше, чем просто продукты и несем добро в каждый дом</h2>
    <div class="flex justify-between flex-wrap md:flex-nowrap items-center gap-y-4">
      <a class="w-full text-center md:text-start underlined-text mt-4 md:ml-10" href="https://www.unilever.ru/privacy-notice-rus"><p class="text-xs">Политика об обработке персональных данных</p></a>
      <p class="w-full text-center md:text-end"><a class="md:mr-10 text-xs">Copyright ©2022 – 2024 «Unilever»</a></p>        
    </div>

    </footer>
  </template>
  
  <script lang="ts">
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  .footer p {
    margin: 0;
    padding: 5px;
  }
  </style>
  