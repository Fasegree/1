// const array = ["Hallo", "Hello World", 10, true];
// console.log(array);
// const obj = {
// 	// key: value
// }
// const user = {
// 	email: "test@gmail.com",
// 	name: "Fase",
// 	age: 35,
// 	hobbis: ["footbol", "design"],
// 	info: {
// 		descr: "Lorem20"
// 	}
// }

// console.log(user);
// console.log(user.name);
// console.log(user.hobbis);
// console.log(user.hobbis[0]);
// console.log(user.info.descr);


// // Создать объект продукта цена название 

// const product0 = {
// name: "Potate",
// price: 10
// }
// console.log(product0.price);

// const product1 = {
// name: "Potate",
// price: 10
// }
// console.log(product1.price);
// // вывести iphone 15
// const products = [
// 	{
// 		name: "Iphone 13",
// 		price: 100
// 	},
// 	{
// 		name: "Iphone 15",
// 		price: 120
// 	},
// 	{
// 		name: "Iphone 16",
// 		price: 120
// 	}
// ]// вывести названия продуктов
// for (let i = 0; i < products.length; i++){
// 	console.log(products[i].name);
// }
// console.log(products[1].name)
// // посчитать стоимость всех products
// let summ = 0;
// for (let i=0; i < products.length; i++){
// 	summ +=products[i].price;
// }
// console.log(summ);

// // отобразит email и логин
// const validatedUsers =[]
// const users = [
// 	{
// 		username: "Name1",
// 		email: "test1@gmail.com",
// 		login: "Vasia",
// 		age: 23
// 	},
// 	{
// 		username: "Name2",
// 		email: "test2@gmail.com",
// 		login: "Petr",
// 		age: 15
// 	},
// 	{
// 		username: "Name3",
// 		email: "test3@gmail.com",
// 		login: "Miha",
// 		age: 23
// 	},
// ]
// for (let i = 0; i < users.length; i++) {
// 	if (users[i].age >18){
// 			console.log(`Ваш e-mail - ${users[i].email}, а ваш логин ${users[i].login}`)
// 			validatedUsers.push(user[i].login)
// 			// validatedUsers.push({login: users[i].login, age: users[i].age})
// 			// validatedUsers.push(user[i])
// 	} 
// }

//////////////////////
/// HW 07_06_2023 ////
//////////////////////

// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

const array = [];
for (let i = 0; i < 11; i++) {
	array[i] = i;
	if (array[i] % 2 == 0) {
			console.log(array[i]);
	}
}
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
const array1 = [];
for (let i = 55; i > 19; i--) {
	array1[i] = i;
	console.log(array1[i]);
}

// Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared =[];
for (let i = 0; i < numbers.length; i++) {
	numbers_squared[i] = numbers[i] ** 2;
	console.log(numbers_squared[i]);
}

// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

let lastElement = numbers_squared[numbers_squared.length];

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

	
const user = {
	first_name: "Ivan",
	last_name: "Ivanov",
	age: 20,
	salary: 500
}
alert(`User's name is ${user.first_name}. Hi is ${user.age} years old`);

/* объект для хранения свойств*/
