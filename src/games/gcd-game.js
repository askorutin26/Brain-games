import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playGcd = () => {
  const howToPlay = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber(1, 100);
    const secondNum = getRandomNumber(1, 100);

    const expressionAsString = `${firstNum} ${secondNum}`;

    const rightAnswer = (num1, num2) => {
      let smallerNum = 0;
      let greatestDivisor = 1;
      if (num1 < num2) { smallerNum = num1; } else { smallerNum = num2; }
      for (let y = 1; y <= smallerNum; y += 1) {
        if (num1 % smallerNum === 0 && num2 % smallerNum === 0) {
          greatestDivisor = smallerNum;
          break;
        } else if (num1 % y === 0 && num2 % y === 0) { greatestDivisor = y; }
      }
      return String(greatestDivisor);
    };
    return [expressionAsString, rightAnswer(firstNum, secondNum)];
  };
  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playGcd;
