/*
Faile pateikiami duomenys masyvas turintis 4, 4 elementų.Pavyzdžiui:
1 2 3 5
5 4 4 7
3 2 1 9
2 3 4 5
Parašykite programą kuri apverstų(pasuktų) masyvą, rezultatas atvaizduojamas ekrane:
1 5 3 2
2 4 2 3
3 4 1 4
5 7 9 5
*/


const fs = require("fs");
const input = fs.readFileSync('pasukti.csv').toString().split("\r\n");

let mas2d = [];
input.forEach((l) => {
    mas2d.push(l.split(" "));
});
for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas2d[i][y]} `;
    }
    console.log(s);
}
console.log("---------------");
for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas2d[y][i]} `;
    }
    console.log(s);
}

/*
 Kai masyvas yra bet kokio dydžio [n,n]
const n = mas2d.length;
for (let i = 0; i < n; i++) {
    let s = "";
    for (let y = 0; y < n; y++) {
        s += `${mas2d[i][y]} `;
    }
    console.log(s);
}
console.log("---------------");
for (let i = 0; i < n; i++) {
    let s = "";
    for (let y = 0; y < n; y++) {
        s += `${mas2d[y][i]} `;
    }
    console.log(s);
}
/*

/*
const fs = require('fs');

let data = fs.readFileSync('pasukti.csv').toString().split('\r\n');

console.log(`----pirminis masyvas----`);

let arr = [];

data.forEach((d) => {
    arr.push(d.split(' ').map(Number));
})

arr.forEach(x => console.log(x.join(' ')));

console.log(`----pasuktas masyvas---`);

const rotateArr = [];

arr.forEach(subArr => {
    subArr.forEach((x, i) => {
        if (!rotateArr[i]) rotateArr[i] = [];
        rotateArr[i].push(x);
    });
});

rotateArr.forEach(x => console.log(x.join(' ')));
*/