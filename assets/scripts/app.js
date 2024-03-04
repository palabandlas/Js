const defaultResult = 0;
const currentResult = defaultResult;
function getUserNumberInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}
