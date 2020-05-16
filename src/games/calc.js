import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const ruleOfGame = 'What is the result of the expression?';

/**
 * getRandomOperator returns random operator from operators string, chosen from 0 to number
 * @example
 * const operator = getRandomOperator('+*-/'); // returns '+' or '*' or '-' or '*'
 */
const getRandomOperator = (operators) => {
  const numberOfOperators = operators.length;
  const randomIndex = getRandomInt(0, numberOfOperators - 1);
  return operators[randomIndex];
};

const prepareQuestionAnswerPair = () => {
  const operators = '+*-';
  const operand1 = getRandomInt(0, 30);
  const operand2 = getRandomInt(0, 30);
  const operator = getRandomOperator(operators);
  const question = `${operand1}${operator}${operand2}`;
  let resultOfExpression;
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
    default:
      break;
  }
  return { question, expectedAnswer: String(resultOfExpression) };
};

const runCalcGame = () => runEngine(ruleOfGame, prepareQuestionAnswerPair);

export default runCalcGame;
