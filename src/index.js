import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const mainEngine = (howToPlay, value, rightAnswer) => {
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';

  const userName = greetUser();
  console.log(howToPlay);

  for (let i = 0; i < 3; i += 1) {
    const currentExpression = value();
    console.log(`Question: ${currentExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer(currentExpression)) {
      console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer(currentExpression)}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default mainEngine;
