import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

/**
 * findGreatestDivisor returns biggest common divisor of 2 numbers
 * @example
 * const divisor = findGreatestDivisor(50, 25); // returns 25
 */
const findGreatestDivisor = (number1, number2) => {
  const maxDivisor = (number1 > number2) ? number2 : number1;
  const divisor = (num1, num2, div) => {
    if ((num1 % div === 0) && (num2 % div === 0)) {
      return div;
    }
    return divisor(num1, num2, div - 1);
  };
  return divisor(number1, number2, maxDivisor);
};

const prepareQuestionAnswerPair = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const expression = `${number1} ${number2}`;
  return { question: expression, expectedAnswer: String(findGreatestDivisor(number1, number2)) };
};

const runGreatestDivisorGame = () => {
  runEngine(rulesOfGame, prepareQuestionAnswerPair);
};

export default runGreatestDivisorGame;
