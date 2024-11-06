class Amfibi {
	name: string;
	foot: number;

	constructor(name: string, foot: number) {
		this.name = name;
		this.foot = foot;
	}
}

class Frog extends Amfibi {
	poison: boolean;

	constructor(name: string, foot: number, poison: boolean) {
		// super() digunakan untuk mengakses constructor dari parent class
		super(name, foot);
		this.poison = poison;
	}
}

const frog = new Frog('Ceroppy', 4, false);
console.log(frog); // Frog { name: 'Ceroppy', foot: 4, poison: false }
