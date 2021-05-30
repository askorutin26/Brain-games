import mainEngine from '../index.js';
import getRandomExpression from '../random-Expression-Generator.js';

const playBrainCalc = () => {
  const howToPlay = 'What is the result of the expression?';

  const getExpression = () => getRandomExpression();

  const getRightAnswer = (currentExpression) => {
    const expressionElements = (currentExpression.split(' '));
    const firstNum = Number(expressionElements[0]);
    const secondNum = Number(expressionElements[2]);
    if (expressionElements[1] === '+') { return String(firstNum + secondNum); }
    if (expressionElements[1] === '-') { return String(firstNum - secondNum); }
    return String(firstNum * secondNum);
  };

  mainEngine(howToPlay, getExpression, getRightAnswer);
};

export default playBrainCalc;
