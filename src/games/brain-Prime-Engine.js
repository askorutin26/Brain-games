import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playBrainPrime = () => {
  const howToPlay = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getExpression = () => getRandomNumber(1, 100);
  const rightAnswer = (currentExpression) => {
    let counter = 0;
    for (let y = 1; y <= currentExpression; y += 1) {
      if (counter > 2) { return 'no'; }
      if (currentExpression % y === 0) { counter += 1; }
    }
    return 'yes';
  };
  mainEngine(howToPlay, getExpression, rightAnswer);
};

export default playBrainPrime;
