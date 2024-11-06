class Chicken {
	static foot: number = 2;

	static walk(): void {
		console.log(`Chicken walk with ${Chicken.foot} legs`);
	}

	getFoot(): void {
		// console.log(this.foot); // Error
		console.log(Chicken.foot); // 2
	}
}

// Static dapat diakses langsung dari class, tanpa perlu membuat instance
console.log(Chicken.foot); // 2
console.log(Chicken.walk()); // Chicken walk with 2 legs

const chicken2 = new Chicken();
chicken2.getFoot();

const chicken3 = new Chicken();
const chicken4 = new Chicken();
const chicken5 = new Chicken();

console.log(chicken3.getFoot()); // 2
console.log(chicken4.getFoot()); // 2
console.log(chicken5.getFoot()); // 2

Chicken.foot = 4;

console.log(chicken3.getFoot()); // 4
console.log(chicken4.getFoot()); // 4
console.log(chicken5.getFoot()); // 4
