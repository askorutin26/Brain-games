import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playGcd = () => {
  const howToPlay = 'Find the greatest common divisor of given numbers.';

  const getExpression = () => `${getRandomNumber(1, 100)} ${getRandomNumber(1, 100)}`;

  const getRightAnswer = (currentExpression) => {
    const expressionElements = (currentExpression.split(' '));
    const firstNum = Number(expressionElements[0]);
    const secondNum = Number(expressionElements[1]);
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
  mainEngine(howToPlay, getExpression, getRightAnswer);
};

export default playGcd;
