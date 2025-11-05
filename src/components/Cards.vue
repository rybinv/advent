<template>
    <div class="container mx-2 md:mx-auto px-1 lg:px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="containerIndex in 3" :key="containerIndex" class="space-y-4">
                <div class="space-y-4">
                    <Card
                        v-for="(card, index) in getCardsForContainer(containerIndex)"
                        :key="index"
                        :text="card.wish"
                        :img="card.photo"
                        :author="card.fio"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

interface ICard {
    id: number;
    wish?: string;
    photo?: string;
    fio: string;
}

export default defineComponent({
    name: "Cards",
    components: {
        Card
    },
    props: {
        cards: {
            type: Array as () => ICard[],
            required: true,
            default: () => []
        }
    },
    methods: {
        getCardsForContainer(containerIndex: number): ICard[] {
            const start = (containerIndex - 1) * Math.ceil(this.cards.length / 3);
            const end = start + Math.ceil(this.cards.length / 3);
            return this.cards.slice(start, end);
        }
    }
});
</script>

<style scoped lang="scss">
    .card-container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    .card {
        width: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        box-sizing: border-box;
        background-color: white;
        max-width: 384px;
        margin-bottom: 16px; /* Добавляем отступ снизу */
    }

</style>
