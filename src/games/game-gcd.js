import { getRandomInt, engine } from '../index.js';

/**
 * findGreatestDivisor returns biggest common divisor of 2 numbers
 * @example
 * const divisor = findGreatestDivisor(50, 25); // returns 25
 */
export const findGreatestDivisor = (number1, number2) => {
  const maxDivisor = (number1 > number2) ? number2 : number1;
  const divisor = (num1, num2, div) => {
    if ((num1 % div === 0) && (num2 % div === 0)) {
      return div;
    }
    return divisor(num1, num2, div - 1);
  };
  return divisor(number1, number2, maxDivisor);
};

const greatestDivisor = (numberRange = 30) => {
  const questionToCheck = () => {
    const number1 = getRandomInt(numberRange);
    const number2 = getRandomInt(numberRange);
    const expression = `${number1} ${number2}`;
    return { question: expression, expectedAnswer: String(findGreatestDivisor(number1, number2)) };
  };

  engine('Find the greatest common divisor of given numbers.', questionToCheck);
};

export default greatestDivisor;
