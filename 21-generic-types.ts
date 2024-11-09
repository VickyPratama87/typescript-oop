type Generic2<T> = T;

function genericFunc2<T>(value: T): Generic2<T> {
	return value;
}

console.log(genericFunc2<string>('Hello, World!')); // Hello, World!
