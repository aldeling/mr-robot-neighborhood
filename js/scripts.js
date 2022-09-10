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
  if (number.includes("1")) {
    return "Beep!";
  } else if (number.includes("2")) {
    return "Boop!";
  } else if (number.includes("3")) {
    return "Won't you be my neighbor!";
  }
  return number;
}
// UI Logic 