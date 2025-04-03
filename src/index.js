import prompt from 'readline-sync'; // правда правда код писал сам

const launchGame = (generateQA, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const playerName = prompt.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRules);
  const totalAttempts = 3;
  let attempt = 0;

  while (attempt < totalAttempts) {
    const [task, correctResponse] = generateQA();
    console.log(`Question: ${task}`);
    const playerResponse = prompt.question('Your response: ');
    if (playerResponse === correctResponse) {
      console.log('Correct!');
      attempt += 1;
    } else {
      console.log(
        `'${playerResponse}' is wrong answer ;(. Correct answer was: '${correctResponse}'.`,
      );

      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default launchGame;
