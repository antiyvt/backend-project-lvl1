import { getRandomInt, engine } from '../index.js';

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

const prime = (numberRange = 100) => {
  const questionToCheck = () => {
    const number = getRandomInt(numberRange);
    const isPrimeNumber = ((checkPrimeNumber(number) === true) ? 'yes' : 'no');
    return { question: number, expectedAnswer: isPrimeNumber };
  };

  engine('Answer "yes" if given number is prime. Otherwise answer "no".', questionToCheck);
};

export default prime;
