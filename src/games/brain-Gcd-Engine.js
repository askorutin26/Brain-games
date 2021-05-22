import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const playGcd = () => {
  const howToPlay = 'Find the greatest common divisor of given numbers.';
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';
  const randomNumberGenerator = () => Math.floor(Math.random() * 100);

  const userName = greetUser();

  console.log(howToPlay);

  for (let i = 0; i < 3; i += 1) {
    const currNum1 = randomNumberGenerator();
    const currNum2 = randomNumberGenerator();
    const rightAnswer = () => {
      let smallerNum = 0;
      let greatestDivisor = 1;
      if (currNum1 < currNum2) { smallerNum = currNum1; } else { smallerNum = currNum2; }
      for (let y = 1; y <= smallerNum; y += 1) {
        if (currNum1 % smallerNum === 0 && currNum2 % smallerNum === 0) {
          greatestDivisor = smallerNum;
          break;
        } else if (currNum1 % y === 0 && currNum2 % y === 0) { greatestDivisor = y; }
      }
      return greatestDivisor;
    };

    console.log(`Question: ${currNum1} ${currNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (+userAnswer !== rightAnswer()) {
      console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
export default playGcd;
