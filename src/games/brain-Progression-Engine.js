import getRandomNumber from '../random-number-generator.js';
import mainEngine from '../index.js';

const playBrainProgression = () => {
  const howToPlay = 'What number is missing in the progression?';
  const getExpression = () => {
    const arrayLength = getRandomNumber(5, 10);
    const randomDotsPosition = getRandomNumber(0, arrayLength - 1);
    let numberInArray = getRandomNumber(1, 100);
    const arrayOfNumbers = [];
    const stepOfProgression = getRandomNumber(1, 50);
    for (let y = 0; y < arrayLength; y += 1) {
      if (y === randomDotsPosition) {
        arrayOfNumbers.push('..');
      } else { arrayOfNumbers.push(numberInArray); }
      numberInArray += stepOfProgression;
    }
    return arrayOfNumbers.join(' ');
  };
  const rightAnswer = (currentExpression) => {
    const elementsArr = (currentExpression.split(' '));
    const numberArray = [];
    const arrayLength = elementsArr.length;
    let step = 0;
    let dotsPosition = 0;
    for (let i = 0; i < arrayLength; i += 1) {
      if (elementsArr[i] === '..') {
        dotsPosition = i;
        numberArray.push('..');
      } else { numberArray.push(Number(elementsArr[i])); }
    }
    if (dotsPosition + 2 < arrayLength - 1) {
      step = numberArray[dotsPosition + 2] - numberArray[dotsPosition + 1];
      return (String(numberArray[dotsPosition + 1] - step));
    }
    step = numberArray[dotsPosition - 1] - numberArray[dotsPosition - 2];
    return (String(numberArray[dotsPosition - 1] + step));
  };
  mainEngine(howToPlay, getExpression, rightAnswer);
};

export default playBrainProgression;
