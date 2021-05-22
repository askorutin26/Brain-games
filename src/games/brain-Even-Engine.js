import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const playBrainEven = () => {
  const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';
  const randomNumberGenerator = () => Math.floor(Math.random() * 100);
  const userName = greetUser();

  console.log(howToPlay);

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomNumberGenerator();

    const rightAnswer = () => {
      if (currentNumber % 2 === 0) {
        return 'yes';
      }
      return 'no';
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

export default playBrainEven;
