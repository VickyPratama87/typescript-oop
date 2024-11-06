class Mamalia {
	name: string = '';
	foot: number = 0;

	run(): void {
		console.log(`${this.name} is running`);
	}
}

class Goat extends Mamalia {
	color: string = 'Chocolate';
}

const goat = new Goat();
goat.name = 'Sabluk';
goat.foot = 4;
goat.color = 'Cream';
console.log(goat); // Goat { name: 'Sabluk', foot: 4, color: 'Cream' }

goat.run(); // Sabluk is running
