interface Teacher {
	name: string;
	age: number;
	phone: string;
	// Optional property
	isMarried?: boolean;
}

let teacher1: Teacher = {
	name: 'John Doe',
	age: 30,
	phone: '1234567890',
};

console.log(teacher1); // { name: 'John Doe', age: 30, phone: '1234567890' }

let teacher2: Teacher = {
	name: 'Jane Doe',
	age: 25,
	phone: '0987654321',
	isMarried: true,
};

console.log(teacher2); // { name: 'Jane Doe', age: 25, phone: '0987654321', isMarried: true }
