////////////////////
// 12.06.23
//////////////////////
function sumFunc(a, b) {
	let res = a + b
	return res
}
// const result =sumFunc(Number(prompt()), +prompt())
const newResult = sumFunc(34, 23)
// console.log(result + 12)
// document.write(result)

/// Создание обїекта консоль и функции лог
function log() {
}
const consol = {
	assert: function assert(){
		assert
	},
	clear: function clear(){
		clear
	}
	// log: log
}
// consol.log()

/// push тоже функция

// task1 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

function get_num_cub(num){
const res = num ** 3;
return res
}
const num = 3;
get_num_cub(num);
console.log(get_num_cub(num))
// function get_num_cubic(num) => return res = num ** 3;

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function positiv_oder_negativ(numm){
	if(numm>0) {
		console.log(`+++`)
		return '+++'
	} else {
		console.log(`---`)
		return '---'
	}
}
// const numm = +prompt(`Enter number`);
// positiv_oder_negativ(numm);

//// В программе объявлена переменная list которая содержит массив чисел 
// Используя цикл посчитайте сумму чисел и выведите их в консоль
const list = [23, 354, -23, 45, 23, 34];
let res = 0;
for(let i = 0; i < list.length; i++) {
	
	res += list[i];
}
// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.

function get_sum_negativ(list){
	let sum_of_even = 0;
	let sum_of_odd = 0;
	for(let i = 0; i < list.length; i++){
		if(list[i] % 2 == 0){
			sum_of_even += list[i];
		} else {
			sum_of_odd += list[i];
		}
	}
	return sum_of_even - sum_of_odd;
}

// console.log(get_sum_negativ(list));
list[15] = 35;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//list.push('Text', 22, 25); // в конец
//list.unshift(prompt()); // в начало
//list.pop(); // delete last element
//list.shift(); //delete first element
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// 2числа => целіе от меньшего  к большему
function range(num1, num2) {
	if(num1 < num2){
		const tmp = num1;
		num1 = num2;
		num2 = tmp;
	}
	let arr = []
	for (let i = num1; i < num2; i++ ) {

	}
	return arr
} 
// console.log(range(2,9));

/// 
function calcNumber(a, b) {
	let minNum = Math.min(a, b);
	let maxNum = Math.max(a, b);
	let numberArray = [];
	
	for (let i = minNum; i <= maxNum; i++) {
		numberArray.push(i);
	}
	return numberArray;
}
// console.log(calcNumber(2, 10));

