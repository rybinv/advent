<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Коллеги из центрального офиса в Москве посетили увлекательный мастер класс "Приготовь свою шаурму" от Шеф-поваров UFS!<br>
                <br>
                На этом мастер классе узнали историю шаурмы, процесс ее приготовления и  все секреты правильной сборки блюда.<br>
                <br>
                Скоро поделимся лайфхаками по ее приготовлению!
                <br>
            </p>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/shawa.jpg";

const emit = defineEmits(['close', 'quiz']);


function close() {
    emit('close');
}

</script>

<style lang="scss">


</style>