import generateNumber from '../getRandomNumber.js';
import launchGame from '../index.js';

const findGCD = (x, y) => (x % y ? findGCD(y, x % y) : Math.abs(y));

const gameTask = 'Find the greatest common divisor of given numbers.';

const setupRound = () => {
  const firstNum = generateNumber();
  const secondNum = generateNumber();
  const taskText = `${firstNum} ${secondNum}`;
  const result = String(findGCD(firstNum, secondNum));
  return [taskText, result];
};

const initiate = () => launchGame(setupRound, gameTask);

export default initiate;