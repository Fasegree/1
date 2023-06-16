/////////////////////
// 09092023 Урок 
/////////////////////////
function calc_evg_damage(players) {
	let summ_damage = 0;
	for (let i = 0; i < players.length; i++) {
		summ_damage += players[i].damage;
	}
	return summ_damage / players.length;
}
let players = [
	{
		playerName: "Player1",
		damage: 90
	},
	{
		playerName: "Player2",
		damage: 150
	},

]
const avg_damage = calc_evg_damage(players);
// console.log(`Avenge damage is ${avg_damage}`)


//
const users = [
	["Ivan", 20, "ivan@example.org"],
	["Petr", 30, "ivan@example.org"],
	["Pavel", 40, "ivan@example.org"],
]
console.log(users[0][0]);
console.log(users[2][1]);
console.log(users[1][2]);

//
function calc_discount(price, discount) {
	console.log(price * (100 - discount) / 100); // price
	console.log(price * discount / 100); // discount

}
calc_discount(100, 10);

// 
function euroToUSD(product) {
	return product.price * 1.06
}
const product = {
	title: "prod",
	price: 500,
	qantity: 10

}
console.log(euroToUSD(product));

//

function square_circle(radius) {
	const S = Math.PI * radius * radius;
	return S
}
const radius = 10;
console.log(square_circle(radius));
