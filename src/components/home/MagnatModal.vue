<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info ">
            <p>
                Магнат Бар - это возможность превратить мороженое в искусство! <br>
                Поделитесь вашими знаниями о проекте и выиграйте приятный приз по <a class="href underlined-text" href="https://forms.yandex.ru/cloud/666ffb1e84227c00e7f2b5dc/">ссылке</a>
            </p>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/magnat.jpg";
const emit = defineEmits(['close', 'quiz']);


function close() {
    emit('close');
}

</script>

<style lang="scss">


</style>