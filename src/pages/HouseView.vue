<template>
    <Header/>
    <Cards :cards="cards"/>
</template>



<script lang="ts" setup>
import {ref} from "vue";
import Cards from "@/components/Cards.vue";
import Header from "@/components/Header.vue";
import HouseApi from "@/services/HouseApi";

const cards = ref< IResponse[] >([]);

interface IResponse {
  id: number;
  photo: string;
  fio: string;
}

( async () => {
    HouseApi.getWindows()
    .then((r) => {
        cards.value = r;
    })
})();

</script>

<style scoped lang="scss">


</style>

<!-- Вот 10 ссылок на разные картинки:

1. ![Картинка 1](https://via.placeholder.com/150)
2. ![Картинка 2](https://via.placeholder.com/200)
3. ![Картинка 3](https://via.placeholder.com/250)
4. ![Картинка 4](https://via.placeholder.com/300)
5. ![Картинка 5](https://via.placeholder.com/350)
6. ![Картинка 6](https://via.placeholder.com/400)
7. ![Картинка 7](https://via.placeholder.com/450)
8. ![Картинка 8](https://via.placeholder.com/500)
9. ![Картинка 9](https://via.placeholder.com/550)
10. ![Картинка 10](https://via.placeholder.com/600)

Эти ссылки ведут на изображения разного размера, которые можно использовать для различных целей. -->
