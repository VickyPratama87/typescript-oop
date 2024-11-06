class Animal4 {
	public name: string;
	private foot: number;
	protected mamalia: boolean;

	constructor(name: string, foot: number, mamalia: boolean) {
		this.name = name;
		this.foot = foot;
		this.mamalia = mamalia;
	}

	walking(): void {
		console.log(this.foot); // 4
	}
}

class Kodok extends Animal4 {
	private umurTelur: number = 4;
	private umurKecebong: number = 7;
	private umurKatak: number = 90;

	getUmur(): void {
		console.log(this.umurTelur + this.umurKecebong + this.umurKatak); // 101
	}
}

const kodok = new Kodok('Kodok', 4, false);
console.log(kodok); // Kodok { name: 'Kodok', foot: 4, mamalia: false }

class Hewan9 {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const katak9 = new Hewan9('Katak');
// katak9.mamalia = true; // Error: Property 'mamalia' is protected and only accessible within class 'Hewan9' and its subclasses.
