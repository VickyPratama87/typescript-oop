interface Generic3<T> {
	propA: T;
	methodA(): T;
}

class Generic3Class<T> implements Generic3<T> {
	propA: T;

	constructor(propA: T) {
		this.propA = propA;
	}

	methodA(): T {
		return this.propA;
	}
}

const genericClass3 = new Generic3Class<string>('Vicky');
console.log(genericClass3.methodA()); // Vicky

const genericClass4 = new Generic3Class<number>(123);
console.log(genericClass4.methodA()); // 123
