function bindToAnArg(func, arg) {
  let bound = func.bind(func, arg)
  return bound;
}

function add(num1,num2){
  return num1+num2;
}


const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);
// let boundFunc = addTwo.add.bind(bindToAnArg)
console.log(addTwo);
console.log(addThree);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
