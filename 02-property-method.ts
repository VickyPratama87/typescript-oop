class Animal6 {
	// Property
	name: string = '';
	foot: number = 0;
	mamalia: boolean = false;

	// Method
	sleep(): void {
		console.log(`${this.name} is sleeping`);
	}
}

const newAnimal6 = new Animal6();
console.log(newAnimal6); // Animal6 { name: '', foot: 0, mamalia: false }

newAnimal6.name = 'Dog';
newAnimal6.foot = 4;
newAnimal6.mamalia = true;
console.log(newAnimal6); // Animal6 { name: 'Dog', foot: 4, mamalia: true }

newAnimal6.sleep(); // Dog is sleeping
