<template>
    <div class="grid grid-cols-12 grid-rows-9">
        <template v-for="(row, rowIndex) in 9" :key="rowIndex">
            <grid-cell
                    :row="rowIndex"
                    v-for="(col, colIndex) in 12"
                    :col="colIndex"
                    :row-data="grid[rowIndex][colIndex]"
                    :initialValue="col"
                    :questionNumbers="questionNumbers"
                    :imgsSrc="imgsSrc"
                    @update:value="updateGridValue(rowIndex, colIndex, $event)"
            />
        </template>
    </div>
</template>

<script>
	import eventBus from '../eventBus';
	import GridCell from './GridCell.vue';
	import G5 from "@/assets/5Г.svg";
	import G1 from "@/assets/1Г.svg";
	import V2 from "@/assets/2В.svg";
	import V3 from "@/assets/3В.svg";
	import V4 from "@/assets/4В.svg";


	export default {
		components: {
			GridCell,
		},
		data() {
			return {
				grid: [
					[0, 0, 0, 0, 0, 0, 0, 0, '2В', 0, 0, 0],
					[0, 0, 0, 0, 0, '3В', 0, 0, 'Б', 0, 0, 0],
					[0, 0, 0, 0, 0, 'В', 0, 0, 'У', 0, 0, 0],
					[0, 0, 0, 0, 0, 'Р', 0, 0, 'Л', '4В', 0, 0],
					[0, 0, 0, 0, 0, 'Е', 0, 0, 'Ь', 'К', 0, 0],
					[0, 0, 0, 0, '1Г', 'М', 'А', 'Й', 'О', 'Н', 'Е', 'З'],
					['5Г', 'К', 'У', 'Х', 'Н', 'Я', 0, 0, 'Н', 'О', 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 'Р', 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 'Р', 0, 0],
				],
				inputs: [
					[0, 0, 0, 0, 0, 0, 0, 0, '2В', 0, 0, 0],
					[0, 0, 0, 0, 0, '3В', 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, '4В', 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, '1Г', 0, 0, 0, 0, 0, 0, 0],
					['5Г', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
				questionNumbers: ['1Г', '2В', '3В', '4В', '5Г'],
                imgsSrc: [G1, V2, V3, V4, G5]
			}
		},
		methods: {
			updateGridValue(rowIndex, colIndex, value) {
				this.inputs[rowIndex][colIndex] = value;
			},
			checkAnswers() {
				let isCorrect = true;
				for (let rowIndex = 0; rowIndex < this.inputs.length; rowIndex++) {
					for (let colIndex = 0; colIndex < this.inputs[rowIndex].length; colIndex++) {
						const input = this.inputs[rowIndex][colIndex];
						const cellValue = this.grid[rowIndex][colIndex];
						if (input !== cellValue && cellValue !== 0) {
							console.log(`Input at (${rowIndex}, ${colIndex}) does not match grid value`);
							isCorrect = false;
						}
					}
				}

				if (isCorrect) {
					alert('Все ответы верны!');
				}
				else {
					alert('Один или несколько ответов неверны!');
				}
			},
			clearInputs() {
				this.inputs = [
					[0, 0, 0, 0, 0, 0, 0, 0, '2В', 0, 0, 0],
					[0, 0, 0, 0, 0, '3В', 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, '4В', 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, '1Г', 0, 0, 0, 0, 0, 0, 0],
					['5Г', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				];
				eventBus.emit('clear-all-inputs');
            }
		},
	};
</script>