// Модуль 4. Домашнее задание 2. (после 16 вебинара)


// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
function get_paragraph() {
	const divNumbers = document.querySelector(".task-1");
	for (let i = 100; i > 50; i -= 10) {

		// divNumbers.className = 'numbers';
		const p = document.createElement("p");
		divNumbers.appendChild(p);
		p.innerText = `New paragraph nummer ${i}`
	}
}
get_paragraph();

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strings = ["first", "second", "string", "sample"];
function add_paragraph(strings) {
	let strings_container = document.querySelector(".task-2");
	for (let i = 0; i < strings.length; i++) {
		strings_container.innerHTML += `
		<div class = "strings_container">
		<p>
		${strings[i]}
		</p>
	</div>`
		console.log(strings[i])

	}
}
add_paragraph(strings);



// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
	{
		first_name: "Vasilii",
		last_name: "Kazakov",
		age: 20
	},
	{
		first_name: "Herman",
		last_name: "Luschnikov",
		age: 15
	},
	{
		first_name: "Robert",
		last_name: "Litvin",
		age: 18
	},
	{
		first_name: "Viktoria",
		last_name: "Stoyanova",
		age: 17
	},
	{
		first_name: "Nikolai",
		last_name: "Sviridov",
		age: 32
	},
	{
		first_name: "Fasegree",
		last_name: "Fadeev",
		age: 35
	},
]
function get_adult_users(users) {
	const task3 = document.querySelector("section");
	console.log(task3)
	users.forEach(user => {
		console.log(user.age)
		if (user.age >= 18) {
			task3.innerHTML += `
				
					<div class="card">
							<p>${user.first_name}</p>
							<p>${user.last_name}</p>
							<p>${user.age}</p>
					</div>
				
		`
		}

	});
}
get_adult_users(users)