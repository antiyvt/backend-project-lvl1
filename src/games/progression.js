import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const ruleOfGame = 'What number is missing in the progression?';

/**
 * returns amount of elements, defined by "numberOfElements" variable elements of arithmetic
 * progression with step defined by "step" variable beginning from firstElement
 * @example
 * getRandomProgression(10, 2); // return (10, 12, 14, 16, 18, 20, 22, 24, 26, 28)
 */
const generateArithmeticProgression = (firstElement, numberOfElements, step) => {
  const elementsOfProgression = [];
  let element;
  for (let i = 0; i < numberOfElements; i += 1) {
    element = firstElement + i * step;
    elementsOfProgression.push(element);
  }
  return elementsOfProgression;
};

const prepareQuestionAnswerPair = () => {
  const numberOfElements = 10;
  const firstElement = getRandomInt(0, 100);
  const step = getRandomInt(1, 10);
  const progression = generateArithmeticProgression(firstElement, numberOfElements, step);
  const randomIndex = getRandomInt(0, numberOfElements - 1);
  const tmpProgression = progression.slice();
  tmpProgression[randomIndex] = '..';
  return { question: tmpProgression, expectedAnswer: String(progression[randomIndex]) };
};

const guessElement = () => runEngine(ruleOfGame, prepareQuestionAnswerPair);

export default guessElement;
