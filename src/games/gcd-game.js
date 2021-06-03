import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playGcd = () => {
  const howToPlay = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber(1, 100);
    const secondNum = getRandomNumber(1, 100);

    const expressionAsString = `${firstNum} ${secondNum}`;

    const rightAnswer = (firstNum, secondNum) => {
      let smallerNum = 0;
      let greatestDivisor = 1;
      if (firstNum < secondNum) { smallerNum = firstNum; } else { smallerNum = secondNum; }
      for (let y = 1; y <= smallerNum; y += 1) {
        if (firstNum % smallerNum === 0 && secondNum % smallerNum === 0) {
          greatestDivisor = smallerNum;
          break;
        } else if (firstNum % y === 0 && secondNum % y === 0) { greatestDivisor = y; }
      }
      return String(greatestDivisor);
    };
    return [expressionAsString, rightAnswer(firstNum,secondNum)];
  };
  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playGcd;
