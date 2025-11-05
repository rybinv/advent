<template>
    <input
            v-if="!isDisabled || !questionNumbers.includes(rowData)"
            class="grid-cell"
            :class="[
      isTopLeftCell ? 'grid-cell--corner' : '',
      isTopRightCell ? 'grid-cell--corner-top-right' : '',
      isBottomLeftCell ? 'grid-cell--corner-bottom-left' : '',
      isBottomRightCell ? 'grid-cell--corner-bottom-right' : '',
      !isDisabled ? 'grid-cell--enabled' : ''
    ]"
            type="text"
            maxlength="1"
            :disabled="isDisabled"
            v-model="cellValue" @input="updateGridValue"
    />
    <div v-else class="grid-cell grid-cell-img-container"
         :class="[
      isTopLeftCell ? 'grid-cell--corner' : '',
      isTopRightCell ? 'grid-cell--corner-top-right' : '',
      isBottomLeftCell ? 'grid-cell--corner-bottom-left' : '',
      isBottomRightCell ? 'grid-cell--corner-bottom-right' : '',
      !isDisabled ? 'grid-cell--enabled' : ''
    ]">
        <img class="grid-cell-img" :src="imgSrc" :alt="rowData">
    </div>
</template>

<script>
	import eventBus from '../eventBus';
	import G5 from "@/assets/5Г.svg";
	import G1 from "@/assets/1Г.svg";
	import V2 from "@/assets/2В.svg";
	import V3 from "@/assets/3В.svg";
	import V4 from "@/assets/4В.svg";
	export default {
		props: {
			row: Number,
			col: Number,
			rowData: String | Number,
			initialValue: {
				type: [String, Number],
				required: true
			},
			questionNumbers: {
				type: Array,
                default: []
            },
			imgsSrc: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				cellValue: ''
			};
		},
        components: {
			G5, G1, V2, V3, V4
        },
		methods: {
			updateGridValue() {
				this.$emit('update:value', this.cellValue);
			},
			clearValue() {
				if (!this.isDisabled) {
					this.cellValue = '';
				}
			}
		},
		watch: {
			initialValue(newVal) {
				this.cellValue = newVal;
			}
		},
		mounted() {
			eventBus.on('clear-all-inputs', this.clearValue);
			if (this.questionNumbers.includes(this.rowData)) {
				this.cellValue = this.rowData
            }
		},
		beforeUnmount() {
			eventBus.off('clear-all-inputs', this.clearValue);
		},
		computed: {
			isDisabled() {
				return this.rowData === 0 || this.questionNumbers.includes(this.rowData);
			},
			isTopLeftCell() {
				return this.row === 0 && this.col === 0;
			},
			isTopRightCell() {
				return this.row === 0 && this.col === 11;
			},
			isBottomLeftCell() {
				return this.row === 8 && this.col === 0;
			},
			isBottomRightCell() {
				return this.row === 8 && this.col === 11;
			},
            imgSrc() {
				const index = this.questionNumbers.indexOf(this.rowData);

				return this.imgsSrc[index]
            }
		},
	};
</script>

<style scoped>
    .grid-cell {
        width: 8.33vw; /* Ширина ячейки 1/12 ширины экрана */
        height: 8.33vw; /* Высота ячейки 1/12 высоты экрана */
        max-width: 47px;
        max-height: 47px;
        border-top: 1px solid #A5B4D6;
        border-left: 1px solid #A5B4D6;
        box-sizing: border-box; /* Учитываем границу в расчете размеров */
    }

    .grid-cell-img-container {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;  /* Адаптивная ширина контейнера */
        height: auto; /* Высота контейнера */
        max-width: 47px; /* Максимальная ширина для контейнера */
    }

    .grid-cell-img {
        max-width: 100%; /* Адаптивная ширина изображения */
        width: 80%;
        height: auto;    /* Автоматическая высота для сохранения пропорций */

    }
    @media (max-width: 450px) {
        .grid-cell-img {
        max-width: 150%; /* Адаптивная ширина изображения */
        width: 105%;
        height: auto;    /* Автоматическая высота для сохранения пропорций */

    }
    }

    input {
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;

    }

    /* Добавим стиль для задизейбленных ячеек */
    .grid-cell[disabled] {
        color: #747475;
        background-color: #fff; /* Цвет фона для задизейбленных ячеек */
    }

    /*!* Добавим стиль для активных ячеек *!*/
    .grid-cell--enabled {
        background-color: #E9EEFF;
    }

    .grid-cell--enabled:hover {
        background-color: rgba(10, 32, 82, 0.2);
        border: 1.2px solid;
    }

    .grid-cell--corner {
        border-top-left-radius: 0.5rem;
    }

    .grid-cell--corner-top-right {
        border-top-right-radius: 0.5rem;
    }

    .grid-cell--corner-bottom-left {
        border-bottom-left-radius: 0.5rem;
    }

    .grid-cell--corner-bottom-right {
        border-bottom-right-radius: 0.5rem;
    }

    .grid-cell:last-child {
        border-right: 1px solid #A5B4D6;
    }

    .grid-cell:nth-child(12n) {
        border-right: 1px solid #A5B4D6;
    }

    .grid-cell:nth-last-child(-n+12) {
        border-bottom: 1px solid #A5B4D6;
    }
</style>
