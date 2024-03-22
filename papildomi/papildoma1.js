/*Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek iš viso šiame masyve yra 
lyginių ir nelyginių skaičių.Išveskite visus lyginius ir nelyginius skaičius.
Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3
Programa turi išvesti:
Lyginiai skaičiai: 8 2
Nelyginiai skaičiai: 5 7 3
*/

const fs = require("fs");
const input = fs.readFileSync('papildomoseile.txt').toString().split(" ").map(Number);

let lyg = [];
let nelyg = [];

input.forEach((d) => {
    if (d % 2 === 0) {
        lyg.push(d);
    }
    if (d % 2 === 1) {
        nelyg.push(d);
    }
});

console.log(`Lyginiai skaiciai: ${lyg.join(' ')}`);
console.log(`Nelyginiai skaiciai: ${nelyg.join(' ')}`);

/*
const fs = require('fs');
let data = fs.readFileSync('papildomoseile.txt').toString().split(' ').map(Number);

let even = [];
let odd = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        even.push(data[i]);
    } else {
        odd.push(data[i]);
    }
}

console.log(`Lyginiai skaičiai: ${even.join(' ')} \nNelyginiai skaičiai: ${odd.join(' ')}`);
*/

/*
const fs = require('fs');
let data = fs.readFileSync('papildomoseile.txt').toString().split(" ").map(Number);

console.log(data);

let lyginiai = [];
let nelyginiai = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        lyginiai.push(data[i]);
    } else {
        nelyginiai.push(data[i]);
    }
}

console.log(`Lyginiai skaičiai: ${lyginiai} `);
console.log(`Nelyginiai skaičiai: ${nelyginiai} `);
*/

