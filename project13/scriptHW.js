// Модуль 4. Домашнее задание 1. (после 14 вебинара)
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function getEvent(){
let num1 = +prompt('Введите число. Это число начало масива');
let num2 = +prompt('Введите число. Это число конец масива');
if (num1>num2){
	const tmp = num1;
	num1 = num2;
	num2 = tmp;
	console.log("Конечное значение меньше начального")
	console.log("Меняю местами")
}
for (let i = num2; i > num1; i--) {
	if (i % 2 == 0){
		console.log(i);
	}
	
}
}
// getEvent() // task1

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(num1, pow = 2){ // сделал по умолчанию степень, но если не ввести второе число, или нажать отмену возвращается 0. Как вернуть pow = 2.. так?
	// if (pow === undefined) {
  //   pow = 2;
  // }
	const res = num1 ** pow;
	return res
}
// let num1 = +prompt('Введите число. Это число основание степени');
// let pow = +prompt('Введите число. Это число степень');

// console.log(power(num1, pow)); // task2

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function getSummArray(){
	let num1 = +prompt('Введите конечное число для подсчета суммы.');
		console.log(num1*(num1+1)/2); // вариант1
		let res = 0;	// вариант2
		for (let i = 0; i <= num1; i++) {
			res+=i;
		}
		console.log(res);

}
// getSummArray() //task3

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных)
function SummEventAndOdd(){
	let n = +prompt('Введите число1');
let m = +prompt('Введите число2');
let summEven = 0;
let summOdd = 0;

if (n>m){
	const tmp = n;
	n = m;
	m = tmp;
}
for (let i = n; i <= m; i++) {
	if(i % 2 == 0){
		summEven += i
	}
	summOdd += i
	
}
console.log(`Сумма четных чисел ${summEven}`)
console.log(`Сумма не четных чисел ${summOdd}`)
}
// SummEventAndOdd() task4

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк Пример: [ 'one', 'two', 'three' ] => 'three'
function firstLong(array){
	if(array.length === 0) {
		console.log(`null`);
	} else {
		let maxLong = array[0].length;
		for (let i = 1; i < array.length; i++) {
			if (array[i].length > maxLong){
				maxLong = array[i].length;
				
			}	
		}
console.log(maxLong)
	}

}

const array = [];
firstLong(array) // Task4
// "summ", "qwerty", "a", "long", "vvery long string", "Hi"