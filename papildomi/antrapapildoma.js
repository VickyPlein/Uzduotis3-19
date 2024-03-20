// Duomenų faile pateikiamas dvimačio masyvo 4, 4 duomenys.Pavyzdžiui:
// 1 2 2 5
// 5 1 4 2
// 2 2 1 3
// 2 8 9 6
// Parašykite programą kuri įstrižainėse padarytų skaičius 0 ir išvestų tokį masyvą:
// 0 2 2 0
// 5 0 0 2
// 2 0 0 3
// 0 8 9 0

const fs = require("fs");
const input = fs.readFileSync("antrai.txt").toString().split("\r\n");

let mas = [];
input.forEach((element) => {
    mas.push(element.split(" "));
})

for (let i = 0; i < 4; i++) {
    let a = " ";
    for (let y = 0; y < 4; y++) {
        a += `${mas[i][y]} `;
    }
    console.log(a);
};
console.log('-----------------------');


for (let i = 0; i < 4; i++) {
    let b = " ";
    for (let y = 0; y < 4; y++) {
        if (y === i || y + i === 4 - 1) {
            mas[y][i] = 0;
            b += `${mas[y][i]} `;
        } else {
            b += `${mas[y][i]} `;
        }
    }
    console.log(b);
};