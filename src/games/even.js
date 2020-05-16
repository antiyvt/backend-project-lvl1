import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const ruleOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const prepareQuestionAnswerPair = () => {
  const question = getRandomInt(0, 100);
  return { question, expectedAnswer: isEven(question) ? 'yes' : 'no' };
};

const runEvenGame = () => runEngine(ruleOfGame, prepareQuestionAnswerPair);

export default runEvenGame;
