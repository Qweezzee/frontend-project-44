import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!'); // Поставьте 5 пожалуйста, я старался долго писать код (5)
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};
