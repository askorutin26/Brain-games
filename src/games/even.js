import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const playBrainEven = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    return [question, rightAnswer];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainEven;
