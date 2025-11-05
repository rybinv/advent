<template>
    <div class="card border rounded-lg p-4 shadow-md bg-white">
        <div v-if="text" class="card-text">
        {{text}}
        </div>
        <div v-if="img" class="card-img">
        <img :src="img" alt="">
        </div>
        <div v-if="author" class="card-author">
        {{author}}
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    export default defineComponent ({
        name: "Card",
        props: {
            text: {
                type: String,
            },
            img: {
                type: String,
            },
            author: {
                type: String,
            },
        },
    })
</script>

<style scoped lang="scss">
    .card {
        height: fit-content;

        &-text {
            color: #0a2052;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-align: left;

        }

        &-img {
            padding-bottom: 8px;
        }

        &-author {
            color: #0a2052;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            text-align: left;

        }

    }
</style>