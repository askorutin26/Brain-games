import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import getRandomNumber from './random-number-generator.js';

const mainEngine = (howToPlay,min,max,rightAnswer) => {
  

const wrongAnswerMessage = 'is wrong answer ;(. Correct answer was';


const userName = greetUser();
console.log(howToPlay);

for (let i = 0; i<3; i+=1)
{
  
    const currentNumber = getRandomNumber(min,max);
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer(currentNumber)) {
        console.log(`'${userAnswer}' ${wrongAnswerMessage} '${rightAnswer(currentNumber)}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      console.log('Correct!');
    }
  
    console.log(`Congratulations, ${userName}!`);
}

export default mainEngine;