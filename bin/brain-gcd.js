#!/usr/bin/env node
/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt, findGreatestDivisor } from '../src/index.js';

const numberRange = 100;
const nameIs = greeting();
const outputForCorrectAnswer = 'Correct!';
const outputIfWon = `Congratulations, ${nameIs}`;
let numberOfRounds = 3;

const calc = () => {
  console.log('Find the greatest common divisor of given numbers.');
  do {
    if (numberOfRounds === 0) {
      console.log(outputIfWon);
      break;
    }
    const number1 = getRandomInt(numberRange);
    const number2 = getRandomInt(numberRange);
    const expression = `${number1} ${number2}`;
    const greatestDivisor = findGreatestDivisor(number1, number2);
    console.log('Question: ', expression);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== greatestDivisor) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${greatestDivisor}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log(outputForCorrectAnswer);
    numberOfRounds -= 1;
  } while (numberOfRounds >= 0);
};

calc();
