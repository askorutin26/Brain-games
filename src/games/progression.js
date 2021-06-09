import mainEngine from '../index.js';
import getRandomNumber from '../random-number-generator.js';

const howToPlay = 'What number is missing in the progression?';

const getProgression = (length, initNumber, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(initNumber);
    initNumber += step;
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

const getMissingNumber = (progressionWithoutGap, progressionWithGap) => {
  let hiddenNumberIndex = 0;
  let hiddenNumber = 0;

  for (let i = 0; i < progressionWithGap.length; i += 1) {
    if (progressionWithGap[i] === '..') {
      hiddenNumberIndex = i;
      hiddenNumber = progressionWithoutGap[hiddenNumberIndex];
      break;
    }
  }
  return hiddenNumber;
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
    const rightAnswer = getMissingNumber(fullProgression, gapProgression).toString();

    return [question, rightAnswer];
  };

  mainEngine(howToPlay, getQuestionAndAnswer);
};

export default playBrainProgression;
