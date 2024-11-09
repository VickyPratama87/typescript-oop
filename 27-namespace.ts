namespace NamespaceExample {
	export class Animal {}

	export const cat = new Animal();
}

const tiger = new NamespaceExample.Animal();
let newCat = NamespaceExample.cat;
