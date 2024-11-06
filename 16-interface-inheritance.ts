interface Vehicle {
	name: string;
	wheels: number;
}

interface ICar extends Vehicle {
	doors: number;
}

interface ITruck extends Vehicle {
	isBox: boolean;
}

class Car implements ICar {
	name: string = 'Civic';
	wheels: number = 4;
	doors: number = 4;
}

class Truck implements ITruck {
	name: string = 'Fuso';
	wheels: number = 6;
	isBox: boolean = true;
}

const car = new Car();
console.log(car); // Car { name: 'Civic', wheels: 4, doors: 4 }

const truck = new Truck();
console.log(truck); // Truck { name: 'Fuso', wheels: 6, isBox: true }
