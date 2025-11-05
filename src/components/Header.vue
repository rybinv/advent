<template>
    <SendWishModal v-if="isSendWishOpen" @close="isSendWishOpen = false" />
    <SendHouseModal v-if="isSendFormOpen" @close="isSendFormOpen = false" />
    <div class="header container mx-2 md:mx-auto px-1 lg:px-4 py-4">

        <div class="grid grid-cols-12 gap-4">
            <!-- Первая колонка -->
            <div class="col-span-6 flex">
                <template v-if="isSmallScreen">
                    <TransparentButton @click="goBack" :text="''" >
                        <img src="@/assets/arrow.svg" alt="Button Icon" class="arrow-icon">
                    </TransparentButton>
                </template>
                <template v-else>
                    <TransparentButton @click="goBack" :text="'Вернуться назад'" />
                </template>

            </div>
            <!-- Вторая колонка -->
            <div class="col-span-6 flex justify-end">
                <VButton @click="OpenForm" :text="'Отправить пожелание'" />
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import TransparentButton from "@/components/TransparentButton.vue";
    import VButton from "@/components/VButton.vue";
    import SendWishModal from "@/components/SendWishModal.vue";
    import SendHouseModal from "@/components/SendHouseModal.vue";

    export default defineComponent ({
        name: "Header",
        components: {
            TransparentButton,
            VButton,
            SendWishModal,
            SendHouseModal
        },
        data() {
            return {
                // Определение размера экрана
                isSmallScreen: false,
                isSendFormOpen: false,
                isSendWishOpen: false
            }
        },
        methods: {
            goBack() {
                history.back()
            },
            checkScreenSize() {
                // Обновление значения isSmallScreen в зависимости от размера экрана
                this.isSmallScreen = window.innerWidth < 640; // Примерный порог ширины экрана для считывания как маленький
            },
            OpenForm() {
                if (this.$route.path === '/house') {
                    this.isSendFormOpen = true;
                    this.isSendWishOpen = false;
                } else if (this.$route.path === '/tree') {
                    this.isSendFormOpen = false;
                    this.isSendWishOpen = true;
                }
            },
        },
        mounted() {
            // Проверка размера экрана после монтирования компонента
            this.checkScreenSize();
            // Слушатель изменения размера экрана
            window.addEventListener('resize', this.checkScreenSize);
        },
        beforeDestroy() {
            // Удаление слушателя перед уничтожением компонента
            window.removeEventListener('resize', this.checkScreenSize);
        }
    })
</script>

<style scoped lang="scss">
    .header {
        height: 80px;
        padding-right: 20px;
    }
    .transparent-button:hover {
        .arrow-icon {
            filter: invert(99%) sepia(8%) saturate(0%) hue-rotate(199deg) brightness(117%) contrast(100%);
            path {
                fill: #FFFFFF;
            }
        }
    }

</style>