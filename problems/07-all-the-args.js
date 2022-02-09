function allTheArgs(func, ...args) {
  let bound = func.bind(null, ...args)
  return bound;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
