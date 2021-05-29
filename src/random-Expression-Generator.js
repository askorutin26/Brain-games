import getRandomNumber from './random-number-generator.js';

const getRandomExpression = () => {
  const index = getRandomNumber(0, 2);
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

  const finalExpression = [expressionAsString[index], expressionAsResult[index]];
  return finalExpression;
};

export default getRandomExpression;
