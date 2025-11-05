<template>
    <FactModal 
        class="fact-component"
        :img="img"
        @close="close" 
    > 
        <div class="scrollable-text mt-2 info">
            <p>
                Миссия бренда Domestos – это борьба с неудовлетворительными санитарно-гигиеническими условиями по всей России.
            </p><br>
            <p>
                В 2024 году программа «Терпеть нельзя учиться» проводится в 6-ой раз!

            </p><br>
            <p>
                Правила участия изменились в 2024 году, предлагаем ознакомиться с ними еще раз:
            </p><br>
            <img class="imgDomestos" :src="img2" />
            <p>
                Предлагаем вам представить себя участниками Школьной программы! 
                Расскажите, как ВЫ помогаете улучшать условия вокруг себя – помогаете экологии, 
                ходите на субботники, рассказываете детям о правилах гигиены и т.д. 
                Не забудьте прикрепить яркое фото или видео для иллюстрации своей истории
            </p><br>
            <p>
                Мы выберем 3 самых классных истории и подарим победителям мерч категории Home Care!
            </p>
        </div>
    </FactModal>
</template>

<script lang="ts" setup>
import FactModal from "@/components/FactModal.vue";
import img from "@/assets/pics/domestos.jpg";
import img2 from "@/assets/pics/domestos2.jpg";

const emit = defineEmits(['close', 'quiz']);


function close() {
    emit('close');
}

</script>

<style lang="scss">

.imgDomestos {
    max-width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 20px;
}
</style>