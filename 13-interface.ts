interface AndroidPhone {
	name: string;
	menu(): void;
	home(): void;
	back(): void;
}

class Samsung implements AndroidPhone {
	name: string = 'Samsung';

	constructor(name: string) {
		this.name = name;
	}

	menu(): void {
		console.log(`${this.name} menu`);
	}

	home(): void {
		console.log(`${this.name} home`);
	}

	back(): void {
		console.log(`${this.name} back`);
	}
}

class Vivo implements AndroidPhone {
	name: string = 'Vivo';

	constructor(name: string) {
		this.name = name;
	}

	menu(): void {
		console.log(`${this.name} menu`);
	}

	home(): void {
		console.log(`${this.name} home`);
	}

	back(): void {
		console.log(`${this.name} back`);
	}
}

class Game {
	constructor(private phone: AndroidPhone) {}

	menu(): void {
		this.phone.menu();
	}

	home(): void {
		this.phone.home();
	}

	back(): void {
		console.log('Game back');
	}
}

const samsung = new Samsung('Samsung S24');
const game = new Game(samsung);
game.menu(); // Samsung S24 menu
game.home(); // Samsung S24 home
game.back(); // Game back

interface ApplePhone {
	name: string;
	home(): void;
}

class IPhone implements ApplePhone {
	name: string = 'Iphone 15 Pro';

	constructor(name: string) {
		this.name = name;
	}

	home(): void {
		console.log(`${this.name} home`);
	}
}

const iphone = new IPhone('Iphone 15 Pro');
// const game2 = new Game(iphone); // Error: Type 'IPhone' is not assignable to type 'AndroidPhone'.
