import engine from '../index.js';
import getRandomInt from '../utils.js';

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

const prime = (numberRange = [0, 50]) => {
  const questionToCheck = () => {
    const number = getRandomInt(...numberRange);
    const isPrimeNumber = ((checkPrimeNumber(number) === true) ? 'yes' : 'no');
    return { question: number, expectedAnswer: isPrimeNumber };
  };
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(rulesOfGame, questionToCheck);
};

export default prime;
