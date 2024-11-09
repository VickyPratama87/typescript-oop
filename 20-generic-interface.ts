interface Generic<T> {
	propA: T;
}

function genericFunc<T>(value: T): Generic<T> {
	let data: Generic<T> = {
		propA: value,
	};

	return data;
}

console.log(genericFunc<string>('Vicky'));
console.log(genericFunc<number>(123));
console.log(genericFunc<boolean>(true));
