import engine from '../index.js';
import getRandomInt from '../utils.js';

/**
 * getRandomOperator returns random operator from operators string, chosen from 0 to number
 * @example
 * const operator = getRandomOperator('+*-/', 2); // returns '+' or '*'
 * const operator = getRandomOperator('', 2); // returns '+' or '*' or '/'
 */
export const getRandomOperator = (operatorsString, range) => {
  const randomIndex = Math.floor(Math.random() * Math.floor(range));
  return operatorsString[randomIndex];
};

const calc = (numberRange = [0, 30]) => {
  const questionToCheck = () => {
    const operators = '+*';
    const operand1 = getRandomInt(...numberRange);
    const operand2 = getRandomInt(...numberRange);
    const operator = getRandomOperator(operators, 2);
    const expression = `${operand1}${operator}${operand2}`;
    const resultOfExpression = (operator === '+') ? (operand1 + operand2) : (operand1 * operand2);
    return { question: expression, expectedAnswer: String(resultOfExpression) };
  };
  const rulesOfGame = 'What is the result of the expression?';
  engine(rulesOfGame, questionToCheck);
};

export default calc;
