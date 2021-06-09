import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  let counter = 0;
  const squareRoot = Math.sqrt(number);
  for (let i = 1; i <= squareRoot; i += 1) {
    if (counter > 2 && squareRoot % i === 0) {
      counter += 1;
      break;
    } else if (squareRoot % i === 0) { counter += 1; }
  }
  return (counter === 2);
};

const playBrainPrime = () => {
  const getQuestionAndAnswer = () => {
    const getRightAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

    const question = getRandomNumber(1, 100);
    const rightAnswer = getRightAnswer(question);

    return [question, rightAnswer];
  };
  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainPrime;
