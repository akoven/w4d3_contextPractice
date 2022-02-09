class CallCenter{
	constructor(name){
		this.name = name;
	}

	sayHello(){
		console.log(`Hello this is ${this.name}`)
	}

	callMeLater = (delay) => {
		// console.log(this)
		setTimeout(() => this.sayHello(), delay)
		// console.log(this.sayHello)
	}


}

let judy = new CallCenter("Judy");
judy.sayHello();         // prints "Hello this is Judy"
judy.callMeLater(1000);
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
