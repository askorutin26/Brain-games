import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playBrainEven = () => {
  const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getExpression = () => getRandomNumber(1, 100);
  const getRightAnswer = (currentExpression) => {
    if (currentExpression % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  mainEngine(howToPlay, getExpression, getRightAnswer);
};

export default playBrainEven;
