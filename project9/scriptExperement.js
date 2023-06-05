
const company1 = 'Apple';
const company2 = 'Samsung';

// BEGIN (write your solution here)
const lengthCompany1 = company1.length + company2.length;

console.log(lengthCompany1)
// END

// Найдите числа, которые делятся на заданное число
const n = +prompt("Enter divider");
const mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 25, 26, 27, 30, 32, 31, 90, 55, 63, -75];
let i = 0;
const lengthMass = mass.length;
for (i = 0; i < lengthMass; i++) {
	if (mass[i] % n == 0) {
		console.log(`${mass[i]} делится на ${n}`);
	}
}

//
