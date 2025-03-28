import getRandomNum from '../getRandomNumber.js';
import startGame from '../index.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': answer = num1 + num2;
      break;
    case '-': answer = num1 - num2;
      break;
    case '*': answer = num1 * num2;
      break;
    default: break;
  }
  return answer;
};

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = toString(calculate(num1, num2, operator));
  return [question, answer];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;