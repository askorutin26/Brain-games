import mainEngine from '../index.js';

const playBrainCalc = () => {
  const howToPlay = 'What is the result of the expression?';
  const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';
  const randomNumberGenerator = () => Math.floor(Math.random() * 50);
  const randomNumberGeneratorForIndex = () => Math.floor(Math.random() * 3);

  const userName = greetUser();

  console.log(howToPlay);

  for (let i = 0; i < 3; i += 1) {
    const currentIndex = randomNumberGeneratorForIndex();
    const currentRandomNumber = randomNumberGenerator();
    const currentRandomNumber2 = randomNumberGenerator();

    const currentExperssionAsString = [
      `${currentRandomNumber}+${currentRandomNumber2}`,
      `${currentRandomNumber}-${currentRandomNumber2}`,
      `${currentRandomNumber}*${currentRandomNumber2}`,
    ];
    const currentExperssionAsResult = [

      currentRandomNumber + currentRandomNumber2,
      currentRandomNumber - currentRandomNumber2,
      currentRandomNumber * currentRandomNumber2,
    ];

    const rightAnswer = () => currentExperssionAsResult[currentIndex];
    console.log(`Question: ${currentExperssionAsString[currentIndex]}`);
    const userAnswer = +readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer()) {
      console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playBrainCalc;
