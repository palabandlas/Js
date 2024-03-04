const defaultResult = 0;
const currentResult = defaultResult;
function getUserNumberInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}
function add() {
  enterNumber = getUserNumberInput();
  currentResult += enterNumber;
  intialResult = currentResult;
  createAndWriteOutput("+", intialResult, enterNumber);
}
addBtn.addEventListener("click", add);
