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
 if (number.includes("3")) {
    return "Won't you be my neighbor!";
  } else if (number.includes("2")) {
    return "Boop!";
  } else if (number.includes("1")) {
    return "Beep!";
  }
  return number;
}

function completeMessage(number) {
  const finalOutput = [];
  const first = correctInput(number);
  if (first === "this is not a valid input")
    return first;
  const second = numberArray(first);
  for (let index = 0; index <= second.length-1; index += 1) {
    const third = changeNumber(second[index]);
    finalOutput.push(third);
  }
  return finalOutput;
}

// UI Logic 

function handelFormSubmission(event) {
  event.preventDefault();
  let userNumber = document.getElementById("number").value;
  document.getElementById("statement").innerText = completeMessage(userNumber);
  document.getElementById("message").removeAttribute("class");
}

window.addEventListener("load",function() {
  document.querySelector("form#userForm").addEventListener("submit", handelFormSubmission);
});