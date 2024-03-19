/* (sprendinys nusirasytas, pakolkas uzduotis posirode per sunki)

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