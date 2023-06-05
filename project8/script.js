// js0

// alert('Hallo World!') 
// console.log("hello")
let name = prompt('Как тебя зовут?')
// console.log(name)

let productName, userName, productPrice
productName = 'Картофель'

// if (name == undefined) {userName = "незнакомец"} else if (name == '') {userName = "незнакомец" }
// else {userName = name}
switch (name) {
case '':
case ' ':
// case undefined:
case null:
		userName = 'незнакомец'
		break
default:
	userName = name
	1
	break
}

productPrice = 2
console.log('Привет, ' + userName + '. Вы покупаете:')
console.log(productName)
console.log('Цена: ' + productPrice + ' Euro')













/*Comment */
// experement
const buttons = document.querySelectorAll('.btn');
const handleClick = (event) => {
	console.log(parseInt(event.target.dataset.number))
}
console.log(buttons)
buttons.forEach(button => {
	button.addEventListener('click', handleClick)
})

console.log("Khal Drogo's favorite word is \"athjahakar\"")