//Faile pateiktos dienos oro temperatūros.Parašykite programą kuri surastų ir išvestų //
//didžiausią ir mažiausią temperatūrą, bei dienas kuriomis buvo šios temperatūros.
//Failo pavyzdys:
//1 2 7 3 4 6 -1 2 4 -3 -3 -5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1


const fs = require("fs");
const input = fs.readFileSync(process.argv[2]).toString().split(" ").map(Number);

console.log(typeof input[0]);

let minT = input[0];
let minD = 1;
let maxT = input[0];
let maxD = 1;
input.forEach((d, i) => {
    if (minT > d) {
        minT = d;
        minD = i + 1;
    }
    if (maxT < d) {
        maxT = d;
        maxD = i + 1;
    }
});
console.log(`Min: ${minT}, ${minD}  Max: ${maxT}, ${maxD}`);

/*
const fs = require('fs');

const temperatures = fs.readFileSync('temp.txt').toString().split(' ').map(Number);

const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);

const maxDays = [];
temperatures.forEach((temp, index) => {
    if (temp === maxTemp) {
        maxDays.push(index + 1);
    }
});

const minDays = [];
temperatures.forEach((temp, index) => {
    if (temp === minTemp) {
        minDays.push(index + 1);
    }
});

console.log('Maximali temperatura:', maxTemp);
console.log('Maximalios temperaturos diena:', maxDays.join(', '));
console.log('Minimali temperatura:', minTemp);
console.log('Minimalios temperaturos diena:', minDays.join(', '));

*/