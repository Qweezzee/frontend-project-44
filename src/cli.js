import readlineSync from 'readline-sync';

export const greeting=()=>{
    console.log('Welcome to the Brain Games!'); // паставте 5 пажалуста я старалса долга писать код(
    const name=readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);

    return name;
}


