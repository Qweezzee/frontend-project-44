import { question } from 'readline-sync';
import generateNum from '../getRandomNumber.js';
import launchGame from '../index.js';

const checkParity = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const createRound = () => {
  const task = generateNum();
  const correctAnswer = checkParity(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const beginGame = () => launchGame(createRound, gameRule);

export default beginGame;