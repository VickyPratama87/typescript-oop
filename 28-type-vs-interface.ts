// Interface hanya bisa berbentuk object, sedangkan type bisa berupa object, union, tuple, dsb
type Phone = string;
type PC = string;
type Student = {
	name: string;
	age: number;
};

// interface Device = string; // Error
interface Device {
	name: string;
}

// Interface bisa di merge / digabungkan sedangkan type tidak bisa
interface Laptop {
	name: string;
	// seri: number;
}

interface Laptop {
	// name: string;
	seri: number;
}

class Asus implements Laptop {
	name: string;
	seri: number;
}

// type Gadget = {
// 	name: string;
// };

// type Gadget = {
// 	seri: number;
// };

// type bisa intersect
type Name = {
	name: string;
};

type Age = {
	age: number;
};

type Person = Name & Age;
type Person2 = Name | Age;

const person: Person = {
	name: 'John',
	age: 20,
};

const person21: Person2 = {
	name: 'John',
};

const person22: Person2 = {
	age: 20,
};

// Kesimpulan:
// Interface cocok digunakan untuk membuat object class
// Type cocok digunakan untuk membuat variabel / function
