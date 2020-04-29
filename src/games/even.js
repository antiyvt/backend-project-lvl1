import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const questionToCheck = () => {
    const number = getRandomInt(0, 100);
    const isEvenNumber = (num) => num % 2 === 0;
    return { question: number, expectedAnswer: isEvenNumber(number) ? 'yes' : 'no' };
  };
  runEngine(rulesOfGame, questionToCheck);
};

export default even;
