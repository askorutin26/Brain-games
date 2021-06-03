import getRandomNumber from '../random-number-generator.js';
import mainEngine from '../index.js';

const playBrainProgression = () => {
  const howToPlay = 'What number is missing in the progression?';
  const getQuestionAndAnswer = () => {
    const progressionLength = getRandomNumber(5, 10);
    const randomDotsPosition = getRandomNumber(0, progressionLength - 1);
    let numberInProgression = getRandomNumber(1, 100);
    const stepOfProgression = getRandomNumber(1, 50);
    let rightAnswer = 0;
    const numbersProgression = [];
    for (let y = 0; y < progressionLength; y += 1) {
      if (y === randomDotsPosition) {
        numbersProgression.push('..');
        rightAnswer = numberInProgression;
      } else { numbersProgression.push(numberInProgression); }
      numberInProgression += stepOfProgression;
    }
    return [numbersProgression.join(' '), rightAnswer.toString()];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainProgression;
