//Užduotis 2
//Faile pateikti skaičiai(sveikieji, iš intervalo nuo 0 iki 9), //
//parašykite JS programą kuri suskaičiuotų kiek ir kokių skaičių yra tekstiniame faile.//


const fs = require("fs");
const input = fs.readFileSync('eile.txt').toString().split(" ");


const mas = Array(10).fill(0);
input.forEach((x) => mas[x]++);
mas.forEach((d, i) => console.log(`[${i}]=>${d}`));


/*
const fs = require('fs');

const data = fs.readFileSync('eile.txt').toString().split(' ').map(Number);

const numberCounts = {};

data.forEach(number => {
    numberCounts[number] = (numberCounts[number] || 0) + 1;
});

for (let i = 0; i < 10; i++) {
    console.log(`${i} => ${numberCounts[i] || 0}`);
}
*/