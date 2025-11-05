<template>
    <FactModal 
        class="fact-component"
        :img="imgRepeat"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
        <p>
            Проект «Repeat» – уникальный стартап внутри Unilever, под зонтичным брендом которого мы запускаем инициативы для наших потребителей, партнеров, экспертов рынков и, конечно, команды Unilever.
            С каждой инициативой наша цель - поделиться экспертизой в уходе за собой, построить платформу для развития технологий и брендов!
        </p>
        <br>
        <p>
            Наша первая инициатива - Repeat.Ru — медиа о том, как превратить уход за собой в осознанную и полезную привычку. 
            Мы создали портал о том, как сделать уход за собой осознанным, экспертным, индивидуальным. И главное - регулярным. Чтобы не Вы подстраивались под косметику, а косметика подстраивалась под вас.
        </p>
        <br>
        <p>
            Важный элемент такого проекта – сообщество единомышленников, которые готовы учиться, делиться своим опытом и пробовать новое!
        </p><br>
        <p>
            Мы ждем только тебя!
        </p>
        <br>
        <p class="href">
            <a href="https://www.repeat.ru/">Регистрируйтесь на сайте Repeat.Ru</a><br>
            <a href="https://t.me/repeat_media">Repeat в Телеграме</a><br>
            <a href="https://vk.com/repeat.media">Repeat в Вконтакте</a>
        </p>
        <div class="flex justify-end">
            <Like class="mr-5" :event_id="props.event_id" />
        </div>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import imgRepeat from "@/assets/photo_2024-06-10_17-20-26.jpg";
import FactModal from "@/components/FactModal.vue";
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
.scrollable-text {
    max-height: 55vh; /* или любая другая высота по вашему выбору */
    overflow-y: auto; /* добавляет вертикальную прокрутку */
}
@media (max-width: 450px) {
    .scrollable-text {
        max-height: 235px;
    }
}
.scrollable-text::-webkit-scrollbar {
    width: 10px; /* ширина скроллбара */
}

/* Дорожка скроллбара */
.scrollable-text::-webkit-scrollbar-track {
    background: transparent; /* фон дорожки */
    border-radius: 10px; /* скругление углов дорожки */
}

/* Ручка скроллбара */
.scrollable-text::-webkit-scrollbar-thumb {
    background: #cccccc; /* цвет ручки */
    border-radius: 10px; /* скругление углов ручки */
}

/* Скрыть стрелки скроллбара */
.scrollable-text::-webkit-scrollbar-button {
    display: none; /* скрыть стрелки */
}

</style>