import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'What number is missing in the progression?';

const getProgression = (length, initNumber, step) => {
  const progression = [];
  let currentNumber = initNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentNumber);
    currentNumber += step;
  }
  return progression;
};

const hideNumberInProgression = (originalProgression, gapPosition) => {
  const transformedProgression = [];
  const { length } = originalProgression;

  for (let i = 0; i < length; i += 1) {
    if (i === gapPosition) { transformedProgression.push('..'); } else { transformedProgression.push(originalProgression[i]); }
  }

  return transformedProgression;
};

const getMissingNumber = (initProgression, gapPosition) => {
  const missingNumber = initProgression[gapPosition];
  return missingNumber;
};

const playBrainProgression = () => {
  const getQuestionAndAnswer = () => {
    const randomLength = getRandomNumber(5, 10);
    const randomGapPosition = getRandomNumber(0, randomLength - 1);
    const randomNumber = getRandomNumber(1, 100);
    const randomStep = getRandomNumber(1, 50);

    const fullProgression = getProgression(randomLength, randomNumber, randomStep);
    const gapProgression = hideNumberInProgression(fullProgression, randomGapPosition);

    const question = gapProgression.join(' ');
    const rightAnswer = getMissingNumber(fullProgression, randomGapPosition).toString();

    return [question, rightAnswer];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainProgression;
