import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number === 1) { return false; }
  const squareRoot = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playBrainPrime = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 100);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, rightAnswer];
  };
  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainPrime;
