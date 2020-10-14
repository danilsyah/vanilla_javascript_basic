const Person = {
	firstName: "Danil",
	lastName: "syah",
	fullName: function () {
		return `${this.firstName} ${this.lastName}`;
	},
	weight: 65,
	height: 172,
	isWeightIdeal: function () {
		const heightMinus100 = this.height - 100;
		return heightMinus100 - (heightMinus100 * 100) / 100 < this.height;
	},
};

console.log(`first name : ${Person.firstName}`);
console.log(`last name : ${Person.lastName}`);
console.log(Person.fullName());
console.log(Person.isWeightIdeal());

const countries = {
	ID: {
		province: ["Jawa Barat", "Jawa Timur", "Jawa Tengah"],
		city: ["bandung", "sumedang", "bogor", "semarang", "jogyakarta"],
	},
	MY: {},
};

// console.log(countries.ID.province);

// optional chaining (?.)
console.log(countries?.TH?.province ?? "object tidak ditemukan");