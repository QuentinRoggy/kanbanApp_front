export const findArrayIndex = (array, arrayArg, filter) => {
  const index = array.findIndex(el => el[arrayArg] === filter)
  return index;
}

