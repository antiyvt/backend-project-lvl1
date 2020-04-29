import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * check whether Number is prime number
 * @example
 * checkPrimeNumber(10); // return false
 * checkPrimeNumber(5); // return true
 */
const checkPrimeNumber = (num) => {
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

const prime = () => {
  const questionToCheck = () => {
    const number = getRandomInt(0,100);
    const isPrimeNumber = ((checkPrimeNumber(number) === true) ? 'yes' : 'no');
    return { question: number, expectedAnswer: isPrimeNumber };
  };
  runEngine(rulesOfGame, questionToCheck);
};

export default prime;
