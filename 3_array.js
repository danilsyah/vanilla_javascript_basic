const nama = ['danil', 'haykal', 'fika', 'udin', 'manusia biasa'];
// console.log(nama[1]);

// nama.forEach(function(item, index, array) {
//     console.log(item, index);
// });

// array method reduce
console.log(nama.reduce(function(acc, nama, ke) {
    acc[nama] = `nama ke ${ke + 1}`;
    return acc;
}, {}));