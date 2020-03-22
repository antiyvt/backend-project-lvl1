import readlineSync from 'readline-sync';

export const askName = () => {
  const nameIs = readlineSync.question('May I have your name? ');
  return nameIs;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameIs = askName();
  console.log(`Hello, ${nameIs}`);
  return nameIs;
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * returns random number from zero to numberRange parameter
 * @example
 * getRandomInt(100); // return random number from 0 to 100
 */
export const getRandomInt = (numberRange) => Math.floor(Math.random() * Math.floor(numberRange));

/**
 * getRandomOperator returns random operator from operators string, choosed from 0 to number
 * @example
 * const operator = getRandomOperator('+*-/', 2); // returns '+' or '*'
 * const operator = getRandomOperator('', 2); // returns '+' or '*' or '/'
 */
export const getRandomOperator = (operatorsString, numberRange) => {
  const randomIndex = Math.floor(Math.random() * Math.floor(numberRange));
  return operatorsString[randomIndex];
};

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
