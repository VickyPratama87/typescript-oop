class Product {
	private _price: number = 0;
	private discount: number = 0.05;

	get price(): number {
		return this._price;
	}

	set price(value: number) {
		this._price = value - value * this.discount;
	}
}

const product = new Product();
product.price = 2000;
console.log(product.price); // 1900
