import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'What is the result of the expression?';

/**
 * getRandomOperator returns random operator from operators string, chosen from 0 to number
 * @example
 * const operator = getRandomOperator('+*-/'); // returns '+' or '*' or '-' or '*'
 */
export const getRandomOperator = (operatorsString) => {
  const operatorsStringLength = operatorsString.length;
  const randomIndex = Math.floor(Math.random() * Math.floor(operatorsStringLength));
  return operatorsString[randomIndex];
};

const calc = () => {
  const questionToCheck = () => {
    const operators = '+*-';
    const operand1 = getRandomInt(0,30);
    const operand2 = getRandomInt(0,30);
    const operator = getRandomOperator(operators);
    const expression = `${operand1}${operator}${operand2}`;
    let resultOfExpression = 0;
    switch (operator) {
      case '+':
        resultOfExpression = (operand1 + operand2);
        break;
      case '-':
        resultOfExpression = (operand1 - operand2);
        break;
      case '*':
        resultOfExpression = (operand1 * operand2);
        break;
    }
    
    return { question: expression, expectedAnswer: String(resultOfExpression) };
  };
  runEngine(rulesOfGame, questionToCheck);
};

export default calc;
