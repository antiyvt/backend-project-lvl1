#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, getRandomInt } from '../src/index.js';

const numberRange = 100;
const nameIs = greeting();

// import { nameIs } from './brain-games.js';

// const numbersSet = [1, 5, 6, 19, 4, 32];
const outputForCorrectAnswer = 'Correct!';
const outputIfWon = `Congratulations, ${nameIs}`;
let numberOfCorrectAnswers = 0;
const isEvenCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    if (numberOfCorrectAnswers === 3) {
      console.log(outputIfWon);
      break;
    }
    const numberToCheck = getRandomInt(numberRange);
    console.log('Question: ', numberToCheck);
    const answer = readlineSync.question('Your answer: ');
    const isEvenNumber = (numberToCheck % 2 === 0) ? 'yes' : 'no';
    if (answer !== isEvenNumber) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEvenNumber}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log(outputForCorrectAnswer);
    numberOfCorrectAnswers += 1;
  } while (numberOfCorrectAnswers <= 3);
};

isEvenCheck();
