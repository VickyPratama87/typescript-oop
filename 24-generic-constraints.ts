interface Length {
	length: number;
}

function getLength<T extends Length>(arg: T): T {
	console.log(arg.length);
	return arg;
}

const generic1 = getLength('Hello');
console.log(generic1);

const generic2 = getLength([1, 2, 3]);
console.log(generic2);

const generic3 = getLength({ length: 3, value: 123 });
console.log(generic3);
