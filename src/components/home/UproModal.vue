<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Все факты, о которых вы узнаете в этом квизе, используются в профессиональном клининге!<br> <br> 
                Для наших партнёров профессиональные решения по уборке предоставляет Unilever Professional. <br> <br> 
                Среди профессионального ассортимента вы можете встретить знакомые бренды с усиленными формулами – это Domestos Professional и Cif Professional. <br>
                При этом фокусом развития Unilever Professional является не только создание универсального ассортимента высокоэффективных чистящих средств, но и развитие сервисной модели: от обучения клиента до сопровождения на процессах уборки.<br>  
                Команда Unilever Professional регулярно проводит партнёрские бизнес-завтраки, road-show и семинары, где делятся ценными знаниями по теории клининга и правильному использованию наших средств. <br> 
                Unilever Professional – не просто продукты, это отдельная экосистема взаимодействия с сегментом B2B.
            </p>
        </div>
        <div class="w-full flex justify-center items-center mt-5">
            <Button text="Перейти к квизу" @click="quiz()"/>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import Button from "@/components/VButton.vue";
import img from "@/assets/pics/upro.jpg";

const emit = defineEmits(['close', 'quiz']);


function close() {
    emit('close');
}

function quiz() {
    emit('quiz');
    close();
}
</script>

<style lang="scss">


</style>