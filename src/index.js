import readlineSync from 'readline-sync';

let nameIs;

export const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  nameIs = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameIs}`);
  console.log(message);
  return nameIs;
};

export const engine = (message, questionToCheck = null) => {
  let numberOfCorrectAnswers = 0;
  if (questionToCheck === null) {
    greeting(message);
    return false;
  }
  greeting(message);
  do {
    if (numberOfCorrectAnswers === 3) {
      console.log(`Congratulations, ${nameIs}`);
      break;
    }

    const { question, expectedAnswer } = questionToCheck();

    console.log('Question: ', question);

    const answer = readlineSync.question('Your answer: ');
    if (answer !== expectedAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".\nLet's try again, ${nameIs}!`);
      break;
    }
    console.log('Correct!');
    numberOfCorrectAnswers += 1;
  } while (numberOfCorrectAnswers <= 3);
  return true;
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * returns random number from zero to numberRange parameter
 * @example
 * getRandomInt(100); // return random number from 0 to 100
 */
export const getRandomInt = (range) => Math.floor(Math.random() * Math.floor(range));
