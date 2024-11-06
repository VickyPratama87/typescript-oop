class Animal3 {
	name: string = '';

	eat(): void {
		console.log('Eating food');
	}
}

class Lion extends Animal3 {
	// Overriding method eat
	eat(): void {
		console.log('Eating meat');
	}
}

const lion = new Lion();
lion.eat(); // Eating meat
