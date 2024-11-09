class ClassA {
	name: string = 'Class A';
	age: number = 10;

	increase(a: number, b: number): number {
		return a + b;
	}
}

class ClassB<T> {
	classProp: T;

	constructor(classProp: T) {
		this.classProp = classProp;
	}
}

const classA = new ClassA();
const classB = new ClassB(classA);

console.log(classB.classProp.name); // Class A
console.log(classB.classProp.age); // 10

const result = classB.classProp.increase(10, 20);
console.log(result); // 30
