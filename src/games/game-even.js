import { getRandomInt, engine } from '../index.js';

const even = (numberRange) => {
  const questionToCheck = () => {
    const number = getRandomInt(numberRange);
    const isEvenNumber = ((number % 2 === 0) ? 'yes' : 'no');
    return { question: number, expectedAnswer: isEvenNumber };
  };

  engine('Answer "yes" if the number is even, otherwise answer "no".', questionToCheck);
};

export default even;
