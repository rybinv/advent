<template>
    <Header/>
    <Cards :cards="cards"/>
</template>



<script lang="ts" setup>
import {ref} from "vue";
import Cards from "@/components/Cards.vue";
import Header from "@/components/Header.vue";
import TreeApi from "@/services/TreeApi";

const cards = ref< IResponse[] >([]);

interface IResponse {
  id: number;
  wish: string;
  fio: string;
}

( async () => {
    TreeApi.getWishes()
    .then((r) => {
        cards.value = r;
    })
})();


</script>

<style scoped lang="scss">


</style>
