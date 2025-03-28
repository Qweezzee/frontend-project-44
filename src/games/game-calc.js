import generateNumber from '../getRandomNumber.js';
import launchGame from '../index.js';

const computeResult = (firstNum, secondNum, operation) => {
  if (operation === '+') return firstNum + secondNum; // я сам писал код чесна
  if (operation === '-') return firstNum - secondNum;
  if (operation === '*') return firstNum * secondNum;
  return null;
};

const gameInstruction = 'What is the result of the expression?';

const prepareRound = () => {
  const value1 = generateNumber();
  const value2 = generateNumber();
  const operations = ['+', '-', '*'];
  const chosenOp = operations[generateNumber(0, operations.length - 1)];
  const task = `${value1} ${chosenOp} ${value2}`;
  const correctResult = String(computeResult(value1, value2, chosenOp));
  return [task, correctResult];
};

const initiateGame = () => launchGame(prepareRound, gameInstruction);

export default initiateGame;
