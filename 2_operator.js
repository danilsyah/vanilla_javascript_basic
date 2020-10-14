// operator aritmatika = +,-,*,/, %
const nilai = 5 + 2;
const nama = 'danil' + 'syah';
const mod = 5 % 2;
console.log(nilai);
console.log(nama);
console.log("sisa bagi = ", mod);

let umur = 10;
console.log(umur === 4) //false
console.log(!(umur === 4)) //true
console.log(umur !== 4); //true

// soal
const sisaBagi = 5 % 2;
if (sisaBagi == 0) {
    console.log('sisa bagi 0');
} else {
    console.log('sisa bagi = ', sisaBagi);
}

const iceCream = 10 % 6;
if (iceCream > 2) console.log("lebih dari 2 ", iceCream);
else console.log("kurang dari 2", iceCream);

const x = 5 > 2 | 4 > 5;
console.log(x);

const a = "10";
let b = 5;
console.log(+a); //berubah menjadi number
console.log(-a); //berubah menjadi negatif number
console.log(b++);
console.log(b);

const sukaMie = true;
const sukaMilo = false;

// logical operator
if (sukaMie && sukaMilo) {
    console.log("aku suka semua");
} else {
    console.log('aku tidak suka semua');
}

let hewan = 'cat' || 'anjing';
console.log(hewan);

const nilai1 = "saya suka makan mie";
const nilai2 = "saya suka es buah";
console.log(`${nilai1} dan ${nilai2}`)