import readlineSync from 'readline-sync';

const numberOfCorrectAnswers = 3;

const runEngine = (message, questionToCheck = null) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (questionToCheck === null) {
    return false;
  }
  console.log(message);

  for (let i = 0; i < numberOfCorrectAnswers; i += 1) {
    const { question, expectedAnswer } = questionToCheck();

    console.log('Question: ', question);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
  return true;
};

export default runEngine;
