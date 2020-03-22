#!/usr/bin/env node
/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import { greeting, getRandomInt, getRandomProgression } from '../src/index.js';

const numberRange = 100;
const numberOfElements = 10;
const nameIs = greeting();
const outputForCorrectAnswer = 'Correct!';
const outputIfWon = `Congratulations, ${nameIs}`;
let numberOfCorrectAnswers = 0;

const guessElement = () => {
  console.log('What number is missing in the progression?');
  do {
    if (numberOfCorrectAnswers === 3) {
      console.log(outputIfWon);
      break;
    }
    const firstElement = getRandomInt(numberRange);
    const step = getRandomInt(10);
    const progression = getRandomProgression(firstElement, numberOfElements, step);
    const randomIndex = getRandomInt(numberOfElements);
    const numberToGuess = progression[randomIndex];
    const tmpProgression = progression;
    tmpProgression[randomIndex] = '..';
    const progressionToGuess = tmpProgression;
    console.log('Question: ', progressionToGuess);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) !== numberToGuess) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${numberToGuess}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log(outputForCorrectAnswer);
    numberOfCorrectAnswers += 1;
  } while (numberOfCorrectAnswers <= 3);
};

guessElement();
