// 08_06_2023 Arsen

//function exemple

// function makeFood () {
// 	console.log("Нарезать овощи");
// 	console.log("Сварить овощи");
// 	console.log("Заправить овощи");
// 	console.log("Подать овощи");
// }
// makeFood ();
// makeFood();

// Принимает имя и выдает Привет, "имя"

// function greeting(name) {

// 	const newName = name.toUpperCase();
// 	console.log("Hallo, " + newName); // + конкентинация  `` интерполяция
// }

// greeting("Arsen");
// greeting("Pavel");
// greeting("Vladislav");

// 2 числа функция +,-,*,/

// function calc(num1, num2) {
// 	console.log(num1 + num2);
// 	console.log(num1 - num2);
// 	console.log(num1 * num2);
// 	console.log(num1 / num2);
// }
// calc(100, 20);
// calc(50, 5);


//Функция получает 2 числа и выводит большее

// function max(num1, num2) {
// 	if (num1 > num2) {
// 		console.log(num1);
// 	} else {
// 		console.log(num2);
// 	}
// }

// const num1 = +prompt("number1= ");
// const num2 = +prompt("number2= ");
//  max(num1, num2);

// цикл consol 0-9

// for(let i=0; i < 20; i++){
// 	console.log(i);
// }

// Принимает х и выводит от 0 до х

// function printNumberNullToN (number) {
// 	for(let i=0; i <= number; i++){
// 		console.log(i);
// 	}
// }
// const number = +prompt();
// printNumberNullToN(number);

// aeyrwbz ghbybvftn vfcbd b d сщтіщд

// function schowArrayElements(array){
// 	for(let i=0; i < array.length; i++){
// 				console.log(array[i]);
// 			}
// }
// const array = [1, 2, 3, 4, "r", "w", "q", "f", 4];
// const names = ["Serg", "Fasegree", "Yulia", "Vlad"]
// schowArrayElements (array);
// schowArrayElements (names);


// площаь комнаті Длина ширина 

// function sqwear(l,w) {
// const S = l * w;
// console.log(`Площадь комнаты ${S}`)
// }

// sqwear(10, 2);

//функция поздравление

// function greeting (name) {
// 	console.log( `Приветствую ${name} на сайте!`);
// }
// const name = prompt("Введите имя");
// greeting (name);

// функция число четное ?не четное

// function evenOrOdd (number) {
// 	if (number%2 == 0){
// 		console.log("Четное")
// 	} else {
// 		console.log("Не четное")
// 	}
// }
// const number = +prompt();
// evenOrOdd (number)

// func array 0 to n

// function printArray(number) {
// 	const arr = [];
// 	for(let i=0; i < number; i++) {
// 		arr.push(i);
		
// 	}
// 	console.log(arr);
// }
// printArray(10)

// функция  запращшивает 3 имнени
function threeName(countNames = 1) {
	const arr = [];
	for(let i = 0; i < countNames; i++) {
		let name = prompt(`Впишите имя ${i+1}`);
		arr.push(name.toUpperCase());
	}
	console.log(arr)
}
const countNames = +prompt("Сколько имен будет в массиве?");
threeName(countNames);
