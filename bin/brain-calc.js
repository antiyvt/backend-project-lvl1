#!/usr/bin/env node
/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt, getRandomOperator } from '../src/index.js';

const numberRange = 100;
const operators = '+*';
const nameIs = greeting();
const outputForCorrectAnswer = 'Correct!';
const outputIfWon = `Congratulations, ${nameIs}`;
let numberOfCorrectAnswers = 0;

const calc = () => {
  console.log('What is the result of the expression?');
  do {
    if (numberOfCorrectAnswers === 3) {
      console.log(outputIfWon);
      break;
    }
    const operand1 = getRandomInt(numberRange);
    const operand2 = getRandomInt(numberRange);
    const operator = getRandomOperator(operators, 2);
    const expression = `${operand1}${operator}${operand2}`;
    // let expressionToCheck = 0;
    const expressionToCheck = eval(expression);
    /* switch (operator) {
      case '*':
        expressionToCheck = operand1 * operand2;
        break;
      case '+':
        expressionToCheck = operand1 + operand2;
        break;
      default:
        break;
    } */
    console.log('Question: ', expression);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== expressionToCheck) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expressionToCheck}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log(outputForCorrectAnswer);
    numberOfCorrectAnswers += 1;
  } while (numberOfCorrectAnswers <= 3);
};

calc();
