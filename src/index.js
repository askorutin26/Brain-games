import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const mainEngine = (howToPlay, value) => {
  const questionsCount = 3;
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';
  const userName = greetUser();

  console.log(howToPlay);

  for (let i = 0; i < questionsCount; i += 1) {
    const [currentExpression, rightAnswer] = value();
    console.log(`Question: ${currentExpression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default mainEngine;
