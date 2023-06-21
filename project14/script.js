// 140623 Arsen

//Создание элементов
// createElement() метод создания элемента
// const header = document.querySelector("header");
// const title = document.createElement("h1"); 
// header.appendChild(title) // додаєм елемент h1 в header
// const main = document.querySelector("main")
// console.log(main)

// // Задача. в header добавить h1 с текстом myTitle
// const header = document.querySelector("header")
// header.innerHTML = "<h1> My Title </h1>" // `в косих лапках можно переносити строки/ робити багатострочну розмітку` += якщо хочимо додати

// цикл добавить 10 тегов р в section
// const sections = document.querySelectorAll("section");
// for (let i = 0; i < sections.length; i++) {
// 	for (let j = 0; j < 10; j++) {
// 		sections[i].innerHTML += "<p> Hello1 </p>"		
// 		sections[i].innerText += "<p> Hello1 </p>"		
// 	}	
// }

//Task 
// const names = ["Arsen", "Yuliya", "Lana", "Maria"]
// const section = document.querySelector("section")
// for (let i = 0; i < names.length; i++) {
// 		section.innerHTML += `<p class ="text"> ${names[i]} </p>`
	
// }

//Task array products. Разметка для product
/*
    <div class="product">
        <h5>Назввание продукта</h5>
        <p>Цена продукта</p>
    </div>
*/

// const products =[
// 	{
// 		name: "Iphone 13",
// 		price: 100000
// 	},
// 	{
// 		name: "Iphone 14",
// 		price: 150000
// 	},
// 	{
// 		name: "Iphone 15",
// 		price: 200000
// 	}
// ]
// const section = document.querySelector("section");
// let summPrice = 0;
// for (let i = 0; i < products.length; i++) {
// 	section.innerHTML += `<div class="product">
// 													<h5>${products[i].name}</h5>
// 													<p>${products[i].price}</p>
// 												</div>`
// 	summPrice += products[i].price;
// }	// додати в Н1 
// section.innerHTML += `<h1>Итого ${summPrice} </h1>`
//////////////////////////
// можно и так, но дольше
// const sumTitle = document.createElement("h1")
// sumTitle.innerText =  `<h1>Сумма продуктов составляет ${sum}</h1>`
// section.appendChild(sumTitle)
////////////////////////

// Task Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
	{
			name: "Iphone 13",
			category: "phone",
			price: 15000
	},
	{
			name: "Iphone 14",
			category: "phone",
			price: 20000
	},
	{
			name: "Acer",
			category: "laptop",
			price: 40000
	},
	{
			name: "Asus",
			category: "laptop",
			price: 35000
	},
	{
			name: "Samsung",
			category: "TV",
			price: 27000
	},
	{
			name: "LG",
			category: "TV",
			price: 7000
	},
]


/*
	<div class="product">
			<h3> {имя продукта} </h3>
			<p> {категория продукта} </p>
			<p> {цена продукта} </p>
			<button>Купить</button>
	</div>
*/
