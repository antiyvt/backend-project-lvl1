#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { nameIs } from './brain-games.js';

const numbersSet = [1, 5, 6, 19, 4, 32];
const outputForWrongAnswer = `"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${nameIs}!`;
const outputForCorrectAnswer = 'Correct!';
const outputIfWon = `Congratulations, ${nameIs}`;
let numberOfCorrectAnswers = 0;
const isEvenCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (const number of numbersSet) {
    console.log('Question: ', number);
    const answer = readlineSync.question('Your answer: ');
    const isEvenNumber = (number % 2 === 0) ? 'yes' : 'no';
    if (answer !== isEvenNumber) {
      console.log(outputForWrongAnswer);
      break;
    }
    console.log(outputForCorrectAnswer);
    numberOfCorrectAnswers += 1;
    if (numberOfCorrectAnswers >= 3) {
      console.log(outputIfWon);
      break;
    }
  }
};

isEvenCheck();
