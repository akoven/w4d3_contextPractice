class Calculator{
	constructor(total){
		this.total = 0;
	}

	add(num){
		this.total += num;
		// this.total = total;
		return this.total;
	}
	subtract(num){
		this.total -= num;
		return this.total;
	}
	divide(num){
		this.total /= num;
		return this.total;;
	}
	multiply(num){
		this.total *= num;
		return this.total;
	}
}

// let calculator = new Calculator();
// console.log(calculator.add(50));
// console.log(calculator.subtract(35)); // => 15
// console.log(calculator.multiply(10)); // => 150
// console.log(calculator.divide(5));    // => 30
// console.log(calculator.total)

module.exports = Calculator;
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
