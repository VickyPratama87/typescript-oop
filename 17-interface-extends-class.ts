class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

// Interface extends class
interface IHorse extends Animal {
	run(): void;
}

interface IBird extends Animal {
	fly(): void;
}

// Class implements interface
class Horse implements IHorse {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	run(): void {
		console.log(`${this.name} is running`);
	}
}

class Bird implements IBird {
	name: string = 'Benol';
	fly(): void {
		console.log(`${this.name} is flying`);
	}
}

// Intantiate class
const horse = new Horse('Blendot');
console.log(horse); // Horse { name: 'Blendot' }
horse.run(); // Blendot is running

const bird = new Bird();
console.log(bird); // Bird { name: 'Benol' }
bird.fly(); // Benol is flying
