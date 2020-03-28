import readlineSync from 'readline-sync';

const numberRange = 100;
const operators = '+*';
let nameIs;
let correctAnswer;

export const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  nameIs = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameIs}`);
  console.log(message);
  return nameIs;
};

export const engine = (message, game) => {
  let numberOfCorrectAnswers = 0;
  greeting(message);
  do {
    if (numberOfCorrectAnswers === 3) {
      console.log(`Congratulations, ${nameIs}`);
      break;
    }
    game();
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log('Correct!');
    numberOfCorrectAnswers += 1;
  } while (numberOfCorrectAnswers <= 3);
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * returns random number from zero to numberRange parameter
 * @example
 * getRandomInt(100); // return random number from 0 to 100
 */
export const getRandomInt = (range) => Math.floor(Math.random() * Math.floor(range));

/**
 * getRandomOperator returns random operator from operators string, choosed from 0 to number
 * @example
 * const operator = getRandomOperator('+*-/', 2); // returns '+' or '*'
 * const operator = getRandomOperator('', 2); // returns '+' or '*' or '/'
 */
export const getRandomOperator = (operatorsString, range) => {
  const randomIndex = Math.floor(Math.random() * Math.floor(range));
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

export const even = () => {
  const numberToCheck = getRandomInt(numberRange);
  console.log('Question: ', numberToCheck);
  correctAnswer = (numberToCheck % 2 === 0) ? 'yes' : 'no';
};

export const calc = () => {
  const operand1 = getRandomInt(numberRange);
  const operand2 = getRandomInt(numberRange);
  const operator = getRandomOperator(operators, 2);
  const expression = `${operand1}${operator}${operand2}`;
  const expressionToCheck = eval(expression);
  console.log('Question: ', expression);
  correctAnswer = String(expressionToCheck);
};

export const gcd = () => {
  const number1 = getRandomInt(numberRange);
  const number2 = getRandomInt(numberRange);
  const expression = `${number1} ${number2}`;
  console.log('Question: ', expression);
  correctAnswer = String(findGreatestDivisor(number1, number2));
};

export const guessElement = () => {
  const numberOfElements = 10;
  const firstElement = getRandomInt(numberRange);
  const step = getRandomInt(10);
  const progression = getRandomProgression(firstElement, numberOfElements, step);
  const randomIndex = getRandomInt(numberOfElements);
  const tmpProgression = progression.slice();
  tmpProgression[randomIndex] = '..';
  const progressionToGuess = tmpProgression;
  console.log('Question: ', progressionToGuess);
  correctAnswer = String(progression[randomIndex]);
};

export const prime = () => {
  const numberToCheck = getRandomInt(numberRange);
  console.log('Question: ', numberToCheck);
  correctAnswer = (checkPrimeNumber(numberToCheck) === true) ? 'yes' : 'no';
};
