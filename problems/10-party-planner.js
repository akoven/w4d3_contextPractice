class PartyPlanner{
	constructor(guestList){
		this.guestList = []
	}

	addToGuestList(name){
		this.guestList.push(name)
	}

	throwParty(){
		if(!this.guestList.length){
			return "Gotta add people to the guest list"
		}else{
			// for(let i = 0; i < this.guestList.length - 1; i++){
			// 	let guest1 = this.guestList[i]
			// 	let guest2 = this.guestList[i+1]
			// }
			return 'Welcome to the party ' + this.guestList.join(' and ')
		}
	}
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty());
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
