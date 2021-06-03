import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playBrainEven = () => {
  const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const isEven = (number) => number % 2 === 0;
    const number = getRandomNumber(1, 100);
    const rightAnswer = isEven(number) ? 'yes' : 'no';

    return [number, rightAnswer];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainEven;
