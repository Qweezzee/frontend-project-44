import prompt from "readline-sync"; // правда правда код писал сам

const launchGame = (generateQA, gameRules) => {
  console.log("Brain Games: Start!");
  const playerName = prompt.question("What's your name? ");
  console.log(`Greetings, ${playerName}!`);
  console.log(gameRules);
  
  const totalAttempts = 3;
  let attempt = 0;

  while (attempt < totalAttempts) {
    const [task, correctResponse] = generateQA();
    console.log(`Task: ${task}`);
    const playerResponse = prompt.question("Your response: ");
    
    if (playerResponse === correctResponse) {
      console.log("Well done!");
      attempt += 1;
    } else {
      console.log(
        `Oops! "${playerResponse}" is incorrect. Right answer: "${correctResponse}".`
      );
      console.log(`Give it another shot, ${playerName}!`);
      return;
    }
  }
  
  console.log(`Victory, ${playerName}!`);
};

export default launchGame;