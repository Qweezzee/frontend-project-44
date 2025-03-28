import fetchRandomNum from '../getRandomNumber.js';
import initiateGame from '../index.js';

const createProgression = (initial, step, size, hiddenPos) => {
  const baseArray = Array(size).fill(initial);
  const progression = baseArray.map((val, idx) => 
    idx === hiddenPos ? '..' : val + step * idx
  );
  return progression.join(' ');
};

const progressionLength = 10;

const description = 'What number is missing in the progression?';

const setupRound = () => {
  const firstNum = fetchRandomNum();
  const increment = fetchRandomNum();
  const hiddenIndex = fetchRandomNum(0, progressionLength - 1);
  const task = createProgression(firstNum, increment, progressionLength, hiddenIndex);
  const correctValue = String(firstNum + increment * hiddenIndex);
  return [task, correctValue];
};

const launch = () => initiateGame(setupRound, description);

export default launch;