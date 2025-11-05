<template>
    <div class="flex justify-center items-center inset-0">
        <Modal class="mt-4 mb-4 ">
            <div class="mb-8">
                <h1 class="mb-3">Кроссворд</h1>
                <h2>Заполните правильно кроссворд, при заполнении используйте заглавные буквы.</h2>
            </div>

            <div class="gap-5 mb-8">
                <Crossword ref="crosswordRef" />
            </div>
            <div class="questions flex flex-col gap-4 mb-8">
                <div class="question">
                   <span class="question-number">1Г</span> - Что имеет 78% процентов жирности в продуктах UFS?
                </div>
                <div class="question">
                   <span class="question-number">2В</span> - Какой самый известный продукт у UFS на рынке?
                </div>
                <div class="question">
                    <span class="question-number">3В</span> - В миссии UFS мы даём шефам ______ любить свою профессию
                </div>
                <div class="question">
                    <span class="question-number">4В </span> - Самый известный бренд бульонов в HoReCa рынке называется _____
                </div>
                <div class="question">
                    <span class="question-number">5Г</span> - Самое главное место для любого шефа это ______
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:justify-between">
                <TransparentButton @click="goBack" :text="'Вернуться назад'" class="mb-3" />
                <!-- Первая колонка -->
                <div class="col-span-6 flex mb-3">
                    <TransparentButton @click="clear" :text="'Очистить все поля'" class="modal-button"/>
                </div>
                <!-- Вторая колонка -->
                <div class="col-span-6 flex">
                    <VButton @click="check" :text="'Закончить'" class="modal-button"/>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts">
import TransparentButton from "@/components/TransparentButton.vue";
import { defineComponent, ref } from "vue";
import Modal from "@/components/Modal.vue";
import VButton from "@/components/VButton.vue";
// @ts-ignore
import Crossword from "@/components/Crossword.vue";

export default defineComponent({
    name: "CrosswordPage",
    components: {
        Modal,
        TransparentButton,
        VButton,
        Crossword
    },
    methods: {
        goBack() {
            history.back()
        },
    },
    setup() {
        const crosswordRef = ref<InstanceType<typeof Crossword> | null>(null);

        const check = () => {
            if (crosswordRef.value) {
                crosswordRef.value.checkAnswers();
            }
        };

        const clear = () => {
            if (crosswordRef.value) {
                crosswordRef.value.clearInputs();
            }
        };

        return {
            crosswordRef,
            check,
            clear
        };
    }
});
</script>

<style scoped lang="scss">
    .modal {
        padding: 20px;
        max-width: 600px;
    }
    .modal-button {
        width: 100%;
    }

    .question {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        text-align: left;

        &-number {
            color: #3d3d3d;
        }
    }

</style>