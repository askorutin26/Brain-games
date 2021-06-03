import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const playBrainCalc = () => {
  const howToPlay = 'What is the result of the expression?';

  const getQuestionAndAnswer = () => {
    const randomIndex = getRandomNumber(0, 2);
    const firstNumber = getRandomNumber(1, 100);
    const secondNumber = getRandomNumber(1, 100);

    const expressionAsString = [
      `${firstNumber} + ${secondNumber}`,
      `${firstNumber} - ${secondNumber}`,
      `${firstNumber} * ${secondNumber}`,
    ];
    const expressionAsResult = [
      firstNumber + secondNumber,
      firstNumber - secondNumber,
      firstNumber * secondNumber,
    ];
    return [expressionAsString[randomIndex], expressionAsResult[randomIndex].toString()];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainCalc;
