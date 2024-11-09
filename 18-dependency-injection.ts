class Store1 {
	private name: string = 'Store A';
	private profit: number = 1000;

	getName(): string {
		return this.name;
	}

	getProfit(): number {
		return this.profit;
	}
}

class Store2 {
	private name: string = 'Store 2';
	private profit: number = 10000;

	getName(): string {
		return this.name;
	}

	getProfit(): number {
		return this.profit;
	}
}

class FashionProduct {
	private store: Store1;
	private name: string;
	private price: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;

		this.store = new Store1();
	}

	sell(): void {
		console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
	}
}

class TechProduct {
	private store: Store2;
	private name: string;
	private price: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;

		this.store = new Store2();
	}

	sell(): void {
		console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
	}
}

const baju = new FashionProduct('Baju', 50000);
baju.sell();

// =================================================
interface IStore {
	name: string;
	profit: number;
	getName(): string;
	getProfit(): number;
}

class Tokopedia implements IStore {
	name: string = 'Tokopedia';
	profit: number = 1000;

	getName(): string {
		return this.name;
	}

	getProfit(): number {
		return this.profit;
	}
}

class Shopee implements IStore {
	name: string = 'Shopee';
	profit: number = 2500;

	getName(): string {
		return this.name;
	}

	getProfit(): number {
		return this.profit;
	}
}

class HijabProduct {
	private store: IStore;
	private name: string;
	private price: number;

	constructor(store: IStore, name: string, price: number) {
		this.name = name;
		this.price = price;
		this.store = store;
	}

	sell(): void {
		console.log(`Product ${this.name} jika dijual di ${this.store.getName()}, maka harga jualnya adalah ${this.store.getProfit() + this.price}`);
	}
}

class FoodProduct {
	private store: IStore;
	private name: string;
	private price: number;

	constructor(store: IStore, name: string, price: number) {
		this.name = name;
		this.price = price;
		this.store = store;
	}

	sell(): void {
		console.log(`Product ${this.name} jika dijual di ${this.store.getName()}, maka harga jualnya adalah ${this.store.getProfit() + this.price}`);
	}
}

const tokopedia = new Tokopedia();
const shopee = new Shopee();

const hijab1 = new HijabProduct(tokopedia, 'Hijab 1', 50000);
const hijab2 = new HijabProduct(shopee, 'Hijab 2', 50000);

const food1 = new FoodProduct(tokopedia, 'Mie Ayam', 20000);
const food2 = new FoodProduct(shopee, 'Mie Ayam', 20000);

hijab1.sell();
hijab2.sell();
food1.sell();
food2.sell();
