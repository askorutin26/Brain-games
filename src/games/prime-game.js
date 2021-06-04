import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playBrainPrime = () => {
  const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const isPrime = (counter) => counter === 2;
    const number = getRandomNumber(1, 100);
    const divisorsCount = (num) => {
      let counter = 0;
      for (let i = 1; i <= num; i += 1) {
        if (num % i === 0) { counter += 1; }
      }
      return counter;
    };

    const rightAnswer = () => (isPrime(divisorsCount(number)) ? 'yes' : 'no');

    return [number, rightAnswer()];
  };
  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainPrime;
