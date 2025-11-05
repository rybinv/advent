<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Насколько вы знаете, наша компания всегда придерживались принципов равенства, разнообразия и инклюзии. 
                Мы оцениваем кандидатов только по их профессиональным качествам. 
            </p><br>
            <p>
                В России всего 26 % людей с инвалидностью официально трудоустроены. 
                Очень много кандидатов с инвалидностью сталкиваются со сложностями при поиске работы - внутренние и
                 внешние барьеры мешают им конкурировать на рынке труда. И поэтому команда ED&I решила
                  направить свой фокус на работу со специализированными фондами и принимает активное участие в менторских и карьерных программах,
                   чтобы поделиться своей экспертизой и помочь кандидатам начать свой карьерный путь, преодолеть все сомнения. 
            </p><br>
            <p>
                За три года 100 наших сотрудников-менторов дали возможность людям с инвалидностью получить первый опыт работы,
                 мы поучаствовали уже в 16 менторских программах и продолжаем вести активную работу в этом направлении внутри компании и вовне,
                  с нашими партнерами.
            </p>
            <div class="flex justify-end">
                <Like class="mr-5" :event_id="props.event_id" />
            </div>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/invalids.jpg";
import Like from "@/components/Like.vue";
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