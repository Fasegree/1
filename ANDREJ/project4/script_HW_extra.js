
/////////////////////////
/// Доп домашка
///////////////////////

console.log(`!!!!!Negativ!!!!!!!`);
// Задача 1.Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел.
function get_negativ_numbers(numbers) {
	const negativ_numbers = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] < 0) {
			negativ_numbers.push(numbers[i]);

		}
	} console.log(negativ_numbers);
}
const numbers = [1, 2, -3, 4, -5, -6, 3, -8, 2, 1]
// get_negativ_numbers(numbers);

console.log(`!!!!!!!!!calc_time_flay!!!!!!!!!!!!!!!`);
// Задача 2.  Запросить у сотрудника (логичистической компании) ко-во часов полета транспортного средства (самолета) и вывести время, в которое он вернется назад.

function calc_time_flay(time_flay = 0) {
	let time_start = +prompt("Введите во сколько часов отправляется самолет");

	console.log((time_flay + time_start) % 24);
	console.log(`Єто оно`);

}
let time_flay = +prompt("Продолжительность");
calc_time_flay(time_flay);

//let time_flay = 0// +prompt(`Kо-во часов полета транспортного средства`);
// calc_time_flay(time_flay);


// 1. Сверстать страницу по макету:

// https://cdn.dribbble.com/userupload/3865999/file/original-379b2e75f0ccdeb8f7cc7a3956e7cde3.png2


console.log(`!!!!!!!!!get_bool_negativ!!!!!!!!!!!!!!!`);
// 1. Напишите функцию которая проверяет, отрицательное число или нет (возвращает true/false)
function get_bool_negativ(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > 0) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
}
// get_bool_negativ(numbers);
console.log(`!!!!!!!!get_last_num_8!!!!!!!!!!!!!!`);

// 2. Запросить у пользователя произвольное число и вывести его, если последняя цифра, на которую оно заканчивается, равна `8`
function get_last_num_8(random_number = 0) {
	random_number = random_number.toString();
	if (random_number.charAt(random_number.length - 1) == 8) {
		console.log(random_number);
	} else {
		console.log(`Ошибочка вышла`);
	}
}
let random_number = 0// prompt(`Введите число, заканичивающееся на 8`);
// get_last_num_8(random_number);

console.log(`!!!!!!!!get_worker_last_age!!!!!!!!!!!!!!`);
// 3. Описать массив (набор) трех пользователей со след/характеристиками `возраст`, `з/п`, `email` и вывести `возраст` последнего (в наборе) пользователя
function get_worker_last_age(workers) {
	console.log(`Возраст последнего ${workers[workers.length - 1].age}`);
}
let workers = [
	{
		age: 35,
		salary: 5000,
		email: "examle@gmail.com"
	},
	{
		age: 21,
		salary: 6000,
		email: "Fasegree@gmail.com"
	},
	{
		age: 43,
		salary: 8000,
		email: "Somtic@gmail.com"
	},

]
// get_worker_last_age(workers);

// 4. Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел
console.log(`!!!!!Negativ numbers!!!!!`);
get_negativ_numbers(numbers);
// 5. Запросить у сотрудника (логичистической компании) `ко-во часов полета` транспортного средства (самолета) и вывести время, в которое он вернется назад
console.log(`!!!!!time_flay!!!!!`);
//  time_flay = +prompt(`Kо-во часов полета транспортного средства`);
// calc_time_flay(time_flay);

// 6. Напишите функцию, которая получает массив различных чисел (положительных и отрицательных) и возвращает массив отрицательных чисел
console.log(`!!!!!get_negativ_numbers!!!!!`);
get_negativ_numbers(numbers);
// 7. Написать функцию, которая принимает товары (массив объектов) и возвращает строку `Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR`
console.log(`!!!!!get_high_price_product!!!!!`);
const products = [
	{
		article: 112265,
		name: "Brot",
		price: 1.5
	},
	{
		article: 112261,
		name: "Milk",
		price: 1.0
	},
	{
		article: 112262,
		name: "Potatoes",
		price: 0.5
	},
	{
		article: 112263,
		name: "Meat",
		price: 3.5
	},
	{
		article: 112264,
		name: "Fish",
		price: 2.5
	},
]
function get_high_price_product(products){
	let high_price = 0;
	let number_iterac = 0;
	// high_price = Math.max(products[0].price,products[1].price,products[2].price,products[3].price,products[4].price);
	for(let i=0; i < products.length; i++){
		if (high_price < products[i].price){
				high_price = products[i].price;
				number_iterac = i;
			} 
		}
	console.log(`Самый дорогой товар ${products[number_iterac].name} стоит ${high_price} EUR`);
}
// get_high_price_product(products);

// 8. Написать функцию, которая принимает два числа в качестве диапазона и возвращает сумму нечетных чисел в указанном диапазоне
console.log(`!!!Range!!!!`);
function calc_summ_odd(num1, num2){
	if(num1 > num2){
		const tmp = num2;
		num2 = num1;
		num1 = tmp;
	}
	summ = 0;
	for(let i = num1; i < num2; i++){
		if(i % 2 != 0){
			summ += i;
		
		}
		
	}
	console.log(`Сумма нечетных целых чисел в диапазоне от ${num1} до ${num2} будет ${summ}`);
	
}
const num1 = +prompt(`Введите начало диапазона `); 
const num2 = +prompt(`Введите конец диапазона `); 
// console.log(`Сумма нечетных целых чисел в диапазоне от ${num1} до ${num2} будет ${calc_summ_odd(num1, num2)}`);
calc_summ_odd(num1, num2);

// 9. Написать программу, которая описывает массив двух игроков, со след/полями: `имя_пользователя`, `ущерб` и сравнивает их `ущерб` между собой (у кого шансов на победу больше)
function get_winner(players1){
	let max_damage = -1;
	let nummer_iteracii = 0;
	for(let i = 0; i < players1.length; i++){
		if(max_damage < players1[i].damage){
			max_damage = players1[i].damage
			nummer_iteracii = i;
		}
	}
	console.log(`Победитель ${players1[nummer_iteracii].name} `);
}

const players1 = [
	{
		name: "Stas",
		damage: 10
	},
	{
		name: "Vlad",
		damage: 11
	}
]
get_winner(players1);
