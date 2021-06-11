import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (operand1, operator, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Wrong operator: ${operator}!`);
  }
};
const getExpression = (operand1, operator, operand2) => `${operand1} ${operator} ${operand2}`;

const playBrainCalc = () => {
  const getQuestionAndAnswer = () => {
    const number1 = getRandomNumber(1, 100);
    const number2 = getRandomNumber(1, 100);
    const operatorIndex = getRandomNumber(0, 2);

    const operator = operators[operatorIndex];

    const question = getExpression(number1, operator, number2);
    const rightAnswer = String(calculate(number1, operator, number2));

    return [question, rightAnswer];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainCalc;
