// js1

// birst yers Age

// const birthYear = +prompt("Введите год рождения");
// let currentDate = new Date();
// let y1 = currentDate.getFullYear();
// age = 2023 - birthYear;
// age = y1 - birthYear;
// console.log (`Ваш возраст ${age} ${y1}`);


// if else


// Task. Ask the user for a number.
// If the number entered by the user is greater than 100, then display "More than" in the console
// else "not more then 100"

// const number = +prompt("Enter the number");
// if (number > 100) {
// 	console.log("more then 100");
// } else if(number == 100){
// 	console.log(" equals 100");
// } else {
// 	console.log("not more then 100");
// }


// birst yers Age

// const birthYear = +prompt("Введите год рождения");
// let currentDate = new Date();
// let yeartodey = currentDate.getFullYear();
// age = 2023 - birthYear;
// age = yeartodey  - birthYear;
// console.log(currentDate);
// if (age >= 18) {
// 	console.log (`Ваш возраст ${age}. Вам разрешен вход`);
// } else {
// 	console.log (`Ваш возраст ${age}. Вам вход ЗАПРЕЩЕН`);
// }


//price?1000 diskount 15% price?1500 diskount 20%

// let price = +prompt("Price?");
// if (price > 1500) { 
// 	console.log("20%");
// }
// 	else if (price > 1000) {
// 		console.log("15%")
// 	}
// 	else {
// 		console.log("0%")
// 	}

	// && и         || или

	// if (price >1000 && price <1500) {
	// 	console.log("15%")
	// } els if (price > 1500) {
	// 	console.log("20%")
	// } else {
	// 	console.log("0%")
	// }

// phone || leptop  discount = 10%

// 	const category1 = "phone"
// 	const category2 = "laptop"
// 	product = "TV"
// if (product == category1 || product == category2) {
// 	console.log("10%");
// }




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Home Work
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
alert("Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа");
const number = +prompt("Enter the number");
const procent10 = number * .1;
console.log(`10% out of ${number}: ${procent10}`);
alert(`10% out of ${number}: ${procent10}`)


// Написать программу, которая получает два числа и выводит наименьшее

alert("Написать программу, которая получает два числа и выводит наименьшее");
const num1 = +prompt("Enter the number 1");
const num2 = +prompt("Enter the number 2");
if (num1 > num2) {
	console.log("Min number is " + num2);
	alert("Min number is " + num2)
} else if (num1 < num2) {
	console.log("Min number is " + num1);
	alert("Min number is " + num1)
} else {
	console.log(`The entered numbers are the same. ${num1}=${num2}`);
	alert(`The entered numbers are the same. ${num1}=${num2}`)
}

//Другое решение
console.log(math.max(num1, num2));


// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

alert("Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’");
const number1 = +prompt("Enter the number 1");
if (number1 > 100) {
	console.log(`${number1} > 100`);
	alert(`${number1} > 100`)
} else if (number1 < 100) {
	console.log(`${number1} < 100`);
	alert(`${number1} < 100`)
} else {
	console.log(`${number1}=100`);
	alert(`${number1}=100`)
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

alert("Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.");
const username = prompt("Введите Ваше имя");
const birthYear = +prompt("Введите Вашу год рождения");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const userAge = currentYear - birthYear;
if (userAge >= 18 && userAge < 150) {
	console.log(`Hello, ${username}!`)
	alert(`Hello, ${username}!`)
} else if (userAge < 18){
	console.log(`Hi, ${username}!`)
	alert(`Hi, ${username}!`)
} else {console.log(`${username}, Вы не ввели ВАШ год рождения`)
alert(`${username}, Вы не ввели ВАШ год рождения`)}


