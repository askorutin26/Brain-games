import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

let counter = 0;
const randomNumberFunction = () => { return Math.floor(Math.random() * 100); }

const playBrainEven = () => {
    let randomNumber = randomNumberFunction();
    const innerLogic = () => {
        let rightAnswer;
        if (randomNumber % 2 === 0) { rightAnswer = 'yes'; } else { rightAnswer = 'no'; }

        if (counter === 3) { return (console.log(`Congratulations, ${name}!`)); }

        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        if (randomNumber % 2 === 0 && answer === 'yes') {
            counter += 1;
            console.log('Correct!');
            randomNumber = randomNumberFunction();
            innerLogic();
        } else if (randomNumber % 2 !== 0 && answer === 'no') {
            counter += 1;
            console.log('Correct!');
            randomNumber = randomNumberFunction();
            innerLogic();
        } else if (answer !== 'yes' || answer !== 'no') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
        } else if (answer === 'yes') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
            console.log(`Let's try again, ${name}!`);
        } else if (answer == 'no') {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
            console.log(`Let's try again, ${name}!`);
        }
    };
    const name = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    innerLogic();
};
export default playBrainEven;
