import launchGame from '../index.js';

const checkPrime = (num) => {
  if (num < 2) return false;
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prepareTask = () => {
  const value = generateNum();
  const response = checkPrime(value) ? 'yes' : 'no';
  return [value, response];
};

const begin = () => launchGame(prepareTask, description);

export default begin;
