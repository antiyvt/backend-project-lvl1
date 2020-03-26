#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, getRandomInt, checkPrimeNumber } from '../src/index.js';

const numberRange = 100;
const nameIs = greeting();

const outputForCorrectAnswer = 'Correct!';
const outputIfWon = `Congratulations, ${nameIs}`;
let numberOfCorrectAnswers = 0;
const isEvenCheck = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  do {
    if (numberOfCorrectAnswers === 3) {
      console.log(outputIfWon);
      break;
    }
    const numberToCheck = getRandomInt(numberRange);
    console.log('Question: ', numberToCheck);
    const answer = readlineSync.question('Your answer: ');
    const isPrimeNumber = (checkPrimeNumber(numberToCheck) === true) ? 'yes' : 'no';
    if (answer !== isPrimeNumber) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrimeNumber}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log(outputForCorrectAnswer);
    numberOfCorrectAnswers += 1;
  } while (numberOfCorrectAnswers <= 3);
};

isEvenCheck();
