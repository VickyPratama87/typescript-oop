class Owl {
	private foot: number = 2;
	private mamalia: boolean = false;

	getFoot(): number {
		return this.foot;
	}

	isMamalia(): boolean {
		return this.mamalia;
	}

	fly(): void {
		console.log('Owl is flying');
	}

	async eat(): Promise<string> {
		return 'Owl is eating';
	}
}
