const nama = ['danil','haykal','fika','razil'];

for (let index = 0; index < nama.length; index++) {
	const element = nama[index];
	console.log(`index ke ${index} : ${element}`);	
}

console.log('----------------');

let index = 0;
while (index < nama.length){
	const element = nama[index];
	console.log(element);
	index++;
}

console.log('-----------------');
// join
console.log(
	nama.map(function(element, index){
		return `${element} adalah nama ke ${index+1}`;
	}).join('; ')
);

console.log('-----------------');

// filter , map
console.log(
	nama
	.filter(function (element, index){
		return element != "haykal";
	})
	.map(function(element, index){
		return `${element} adalah nama ke ${index+1}`;
	})
);

const angka = ['10','22','2','45', '12'];
const angkaMax = angka.find(element => element > 15);
console.log(angkaMax);