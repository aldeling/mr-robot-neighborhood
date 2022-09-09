// Business Logic

function correctInput(number) {
  if ((number.length === 0) || (!Number(number))) {
    return "this is not a valid input";
  }
  return number;
}

function numberArray(number) {
  const finishedArray = [];
  for (let index = 0; index <= number; index += 1) {
    let numberStrings = index.toString();
    finishedArray.push(numberStrings)
  }
  return finishedArray;
}

function changeNumber(number) {
  if (number === "1") {
    return "Beep!"
  } else if (number === "2") {
    return "Boop!"
  }
}
// UI Logic 