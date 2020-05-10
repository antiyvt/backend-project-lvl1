import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;

const prepareQuestionAnswerPair = () => {
  const number = getRandomInt(0, 100);
  return { question: number, expectedAnswer: isEvenNumber(number) ? 'yes' : 'no' };
};

const runEvenGame = () => {
  runEngine(rulesOfGame, prepareQuestionAnswerPair);
};

export default runEvenGame;
