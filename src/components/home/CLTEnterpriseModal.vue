<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <h1 class="mb-5 text-sm">РАЗВИТИЕ КУЛЬТУРЫ ВНУТРЕННЕГО ПРЕДПРИНИМАТЕЛЬСТВА</h1>
                <p>
                    Это проактивная деятельность сотрудников компании по обновлению существующих процессов или созданию новых продуктов/процессов и сервисов 
                    с последующей коммерциализацией и выводом их на рынок/развитием внутри Unilever.<br>
                    <br>
                    Наша миссия: <br>РАЗВИВАТЬ КУЛЬТУРУ ВНУТРЕННЕГО ПРЕДПРИНИМАТЕЛЬСТВА<br>
                    Наши цели:<br><br>
                    1. Развитие инфраструктуры (создание центра предпринимательства, создание платформы для сбора идей, обеспечение ресурсами)<br><br>
                    2. Развитие мотивации и вовлечения<br><br>
                    3. Развитие компетенций и культуры<br>
                    <br><br>
                    В рамках работы команды уже реализованы некоторые проекты, которые можно посмотреть в записи:<br><br>
                    <a class="href" href="https://disk.yandex.ru/d/cwGglJkG0DgOQw">- Панельная дискуссия.</a><br>
                    <a class="href" href="https://disk.yandex.ru/i/eZflg601v2dXDQ">- Открытая дискуссия "Вопросы взрослым".</a><br>
                    <a class="href" href="https://disk.yandex.ru/i/SjcJ1p7OiBiPPg">- "День предпринимателя".</a><br>
                </p>
                <div class="flex justify-end">
                    <Like class="mr-5" :event_id="props.event_id" />
                </div>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import Like from "@/components/Like.vue";
import img from "@/assets/pics/enterprise.jpg";
import { defineProps } from 'vue';
const emit = defineEmits(['close', 'quiz']);

const props = defineProps({
    event_id: String
});

function close() {
    emit('close');
}


</script>

<style lang="scss">


</style>