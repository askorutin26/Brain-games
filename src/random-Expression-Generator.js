import getRandomNumber from './random-number-generator.js';

const getRandomExpression = () => {
  const randomIndex = getRandomNumber(0, 2);
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const expressionAsString = [
    `${firstNumber} + ${secondNumber}`,
    `${firstNumber} - ${secondNumber}`,
    `${firstNumber} * ${secondNumber}`,
  ];

  return expressionAsString[randomIndex];
};

export default getRandomExpression;
