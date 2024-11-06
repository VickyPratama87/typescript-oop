// Cara I
class Animal {
	name: string;
	foot: number;

	constructor(name: string, foot: number) {
		console.log('Contructor animal is running');
		this.name = name;
		this.foot = foot;
	}
}

const bird = new Animal('Blacky', 2);
console.log(bird); // Animal { name: 'Blacky', foot: 2 }

// Cara II
class Animal1 {
	// name: string;
	// foot: number;
	constructor(public name: string, public foot: number) {
		// this.name = name;
		// this.foot = foot;
	}
}

const cow = new Animal1('Getol', 4);
console.log(cow); // Animal1 { name: 'Getol', foot: 4 }
