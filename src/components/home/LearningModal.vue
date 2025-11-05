<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info ">
            <h1 class="mb-5 text-sm">Дорогие коллеги,</h1>
            <p>
                Нашей компании исполняется 32 года, и на протяжении этих лет мы переживали множество трансформационных событий и процессов. 
                Но все эти годы главное богатство и ценность Юнилевер остается неизменным – это люди. <br>
                Каждый день мы усердно трудимся, чтобы создавать больше чем просто продукты и нести добро в каждый дом, делая жизнь наших Валентин лучше. <br>
                <br>
                А что же мы сами приобрели за это время? Чего достигли и чему научились в Юнилевер?<br>
                Мы задали этот вопрос вам, нашим сотрудникам, и подготовили ролик об обучении в компании – он уже доступен к просмотру по <a class="underlined-text href" href="https://disk.yandex.ru/i/VHSqsx4nFkQ9DQ">ссылке.</a>
                <br><br>
                Как говорил Сократ: «Знание – это единственное богатство, которое увеличивается, когда его делят».
            </p>
            <div class="flex justify-end">
                <Like class="mr-5" :event_id="props.event_id" />
            </div>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import Like from "@/components/Like.vue";
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/learn.jpg";
const emit = defineEmits(['close', 'quiz']);
import { defineProps } from 'vue';

const props = defineProps({
    event_id: String
});

function close() {
    emit('close');
}

</script>

<style lang="scss">


</style>