import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const ruleOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * check whether Number is prime number
 * @example
 * checkPrimeNumber(10); // return false
 * checkPrimeNumber(5); // return true
 */
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let divisor = 2;
  do {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  } while (divisor < num / 2);
  return true;
};

const prepareQuestionAnswerPair = () => {
  const number = getRandomInt(0, 100);
  return { question: number, expectedAnswer: isPrime(number) ? 'yes' : 'no' };
};

const runPrimeGame = () => runEngine(ruleOfGame, prepareQuestionAnswerPair);

export default runPrimeGame;
