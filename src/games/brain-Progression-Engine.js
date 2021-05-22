import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const playBrainProgression = () => {
  const howToPlay = 'What number is missing in the progression?';
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';
  const randomNumberGenerator = () => Math.floor(Math.random() * 100);
  const randomArrayLength = () => {
    const min = Math.ceil(5);
    const max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomDotsPosition = (min, max) => {
    const innerMin = Math.ceil(min);
    const innerMax = Math.floor(max);
    return Math.floor(Math.random() * (innerMax - innerMin) + 1) + innerMin;
  };
  const userName = greetUser();
  console.log(howToPlay);

  for (let i = 0; i < 3; i += 1) {
    const arrayLength = randomArrayLength();
    let numberInArray = randomNumberGenerator();
    const stepOfProgression = randomNumberGenerator();

    const dotsPosition = randomDotsPosition(1, arrayLength);

    let rightAnswer = 0;
    const arrayOfNumbers = [numberInArray];
    for (let y = 1; y < arrayLength; y += 1) {
      numberInArray += stepOfProgression;
      if (y === dotsPosition) {
        arrayOfNumbers.push('..');
        rightAnswer = numberInArray;
      } else { arrayOfNumbers.push(numberInArray); }
    }

    console.log(`Question: ${arrayOfNumbers.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (+userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainProgression;
