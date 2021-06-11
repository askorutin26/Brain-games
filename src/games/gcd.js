import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return num1 + num2;
  }
  if (num1 > num2) {
    return getGcd(num1 % num2, num2);
  }
  return getGcd(num1, num2 % num1);
};

const playGcd = () => {
  const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber(1, 100);
    const secondNum = getRandomNumber(1, 100);

    const question = `${firstNum} ${secondNum}`;
    const rightAnswer = String(getGcd(firstNum, secondNum));

    return [question, rightAnswer];
  };
  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playGcd;
