interface Student {
	name: string;
	age: number;
	readonly status: string;
}

let student: Student = {
	name: 'John Doe',
	age: 25,
	status: 'active',
};

console.log(student); // { name: 'John Doe', age: 25, status: 'active' }

// student.status = 'inactive'; // Error: Cannot assign to 'status' because it is a read-only property.
