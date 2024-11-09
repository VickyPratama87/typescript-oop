interface Product1 {
	sell(): void;
}

class CarProduct implements Product1 {
	sell(): void {
		console.log('Car sold');
	}
}

class MotorProduct implements Product1 {
	sell(): void {
		console.log('Motor sold');
	}
}

function sellProducts<T extends Product1>(products: T[]): void {
	products.forEach((product) => product.sell());
}

const carProduct = new CarProduct();
const motorProduct = new MotorProduct();

sellProducts([carProduct, motorProduct]); // Car sold, Motor sold
