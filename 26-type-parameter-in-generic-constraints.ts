function getProperty<T, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

let student = {
	name: 'John',
	age: 25,
	prodi: 'Computer Science',
};

console.log(getProperty(student, 'name')); // John
console.log(getProperty(student, 'age')); // 25
console.log(getProperty(student, 'prodi')); // Computer Science
