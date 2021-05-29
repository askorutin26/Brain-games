import mainEngine from '../index.js';
import getRandomExpression from '../random-Expression-Generator.js';

const playBrainCalc = () => {
  const howToPlay = 'What is the result of the expression?';

  const getExample = () => {
    const example = getRandomExpression();
    return example[0];
  };

  const rightAnswer = (currentExpression) => {
    const elementsArr = (currentExpression.split(' '));
    const firstNum = Number(elementsArr[0]);
    const secondNum = Number(elementsArr[2]);
    if (elementsArr[1] === '+') { return String(firstNum + secondNum); }
    if (elementsArr[1] === '-') { return String(firstNum - secondNum); }
    return String(firstNum * secondNum);
  };
  mainEngine(howToPlay, getExample, rightAnswer);
};

export default playBrainCalc;
