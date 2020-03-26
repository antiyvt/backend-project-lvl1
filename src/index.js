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

/**
 * returns amount of elements, defined by "numberOfElements" variable elements of arithmetic
 * progression with step defined by "step" variable beginning from firstElement
 * @example
 * getRandomProgression(10, 2); // return (10, 12, 14, 16, 18, 20, 22, 24, 26, 28)
 */
export const getRandomProgression = (firstElement, numberOfElements, step) => {
  const arr = [];
  let element = firstElement;
  const lastElement = firstElement + (numberOfElements - 1) * step;
  do {
    arr.push(element);
    element += step;
  } while (element <= lastElement);
  return arr;
};

/**
 * check whether Number is prime number
 * @example
 * checkPrimeNumber(10); // return false
 * checkPrimeNumber(5); // return true
 */
export const checkPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  let divisor = 2;
  do {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  } while (divisor < num);
  return true;
};
