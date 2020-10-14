const Person = {
    firstName: "Danil",
    lastName: "Syah",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 53,
    height: 165,
    weightIdeal: function () {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100;
    },
    needDiet: function () {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight) {
            return ("You need more protein, need more " + (weightIdeal - this.weight) + "Kg");
        } else if (weightIdeal + 5 < this.weight) {
            return ("You need a mayo diet, need reduce weight: " + (this.weight - weightIdeal) + " Kg");
        }
        return "you are in a good shape";
    },
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());