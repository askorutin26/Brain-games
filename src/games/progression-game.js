import getRandomNumber from '../random-number-generator.js';
import mainEngine from '../index.js';

const playBrainProgression = () => {
  const howToPlay = 'What number is missing in the progression?';
  const getExpression = () => {
    const progressionLength = getRandomNumber(5, 10);
    const randomDotsPosition = getRandomNumber(0, progressionLength - 1);
    let numberInProgression = getRandomNumber(1, 100);
    const stepOfProgression = getRandomNumber(1, 50);
    const numbersProgression = [];
    for (let y = 0; y < progressionLength; y += 1) {
      if (y === randomDotsPosition) {
        numbersProgression.push('..');
      } else { numbersProgression.push(numberInProgression); }
      numberInProgression += stepOfProgression;
    }
    return numbersProgression.join(' ');
  };

  const getRightAnswer = (currentExpression) => {
    const expressionElements = (currentExpression.split(' '));
    const numbersProgression = [];
    const progressionLength = expressionElements.length;
    let step = 0;
    let dotsPosition = 0;
    for (let i = 0; i < progressionLength; i += 1) {
      if (expressionElements[i] === '..') {
        dotsPosition = i;
        numbersProgression.push('..');
      } else { numbersProgression.push(Number(expressionElements[i])); }
    }
    if (dotsPosition + 2 < progressionLength - 1) {
      step = numbersProgression[dotsPosition + 2] - numbersProgression[dotsPosition + 1];
      return (String(numbersProgression[dotsPosition + 1] - step));
    }
    step = numbersProgression[dotsPosition - 1] - numbersProgression[dotsPosition - 2];
    return (String(numbersProgression[dotsPosition - 1] + step));
  };
  mainEngine(howToPlay, getExpression, getRightAnswer);
};

export default playBrainProgression;
