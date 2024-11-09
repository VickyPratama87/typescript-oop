function getData(value: any): any {
	return value;
}

const data1 = getData(123);
console.log(data1);

// Generics Type
function myData<T>(value: T): T {
	return value;
}

const data2 = myData<string>('Vicky');
console.log(data2.length); // 5

const data3 = myData<number>(12345);
console.log(data3.toFixed(2)); // 12345.00

const data4 = myData<boolean>(true);
console.log(data4.valueOf()); // true
