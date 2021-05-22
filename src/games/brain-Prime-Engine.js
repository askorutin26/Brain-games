import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const playBrainPrime = () => {
  const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';

  const randomNumberGenerator = () => Math.floor(Math.random() * 100);
  const userName = greetUser();

  console.log(howToPlay);
  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomNumberGenerator();
    const rightAnswer = () => {
      let counter = 0;
      for (let y = 1; y <= currentNumber; y += 1) {
        if (counter > 2) { return 'no'; }
        if (currentNumber % i === 0) { counter += 1; }
      }
      return 'yes';
    };
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer()) {
      console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainPrime;
