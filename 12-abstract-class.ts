abstract class Animal5 {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	eat(): void {
		console.log(`${this.name} is eating`);
	}

	abstract move(): void;
}

class Cat5 extends Animal5 {
	constructor() {
		super('Cat');
	}

	move(): void {
		console.log('Cat is walking');
	}
}

class Fish5 extends Animal5 {
	constructor() {
		super('Fish');
	}

	move(): void {
		console.log('Fish is swimming');
	}
}

const cat = new Cat5();
cat.eat(); // Cat is eating
cat.move(); // Cat is walking

const fish = new Fish5();
fish.eat(); // Fish is eating
fish.move(); // Fish is swimming
