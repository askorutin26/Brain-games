import mainEngine from '../index.js';


const playBrainEven = () => {
const howToPlay = 'Answer "yes" if the number is even, otherwise answer "no".';
const rightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

mainEngine(howToPlay,1,100,rightAnswer);

}

export default playBrainEven;
