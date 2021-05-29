import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playBrainEven = () => {
  const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
  const currentNumber = () => getRandomNumber(1, 100);
  const rightAnswer = (currentExpression) => {
    if (currentExpression % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  mainEngine(howToPlay, currentNumber, rightAnswer);
};

export default playBrainEven;
