import engine from '../index.js';
import getRandomInt from '../utils.js';

const even = (numberRange = [0, 100]) => {
  const questionToCheck = () => {
    const number = getRandomInt(...numberRange);
    const isEvenNumber = ((number % 2 === 0) ? 'yes' : 'no');
    return { question: number, expectedAnswer: isEvenNumber };
  };
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(rulesOfGame, questionToCheck);
};

export default even;
