import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const rulesOfGame = 'What number is missing in the progression?';

/**
 * returns amount of elements, defined by "numberOfElements" variable elements of arithmetic
 * progression with step defined by "step" variable beginning from firstElement
 * @example
 * getRandomProgression(10, 2); // return (10, 12, 14, 16, 18, 20, 22, 24, 26, 28)
 */
export const getRandomProgression = (firstElement, numberOfElements, step) => {
  const arr = [];
  let element = firstElement;
  const lastElement = firstElement + (numberOfElements - 1) * step;
  do {
    arr.push(element);
    element += step;
  } while (element <= lastElement);
  return arr;
};

getRandomProgression(2, 10, 3);

const guessElement = () => {
  const questionToCheck = () => {
    const numberOfElements = 10;
    const firstElement = getRandomInt(0,100);
    const step = getRandomInt(0,10);
    const progression = getRandomProgression(firstElement, numberOfElements, step);
    const randomIndex = getRandomInt(0,numberOfElements);
    const tmpProgression = progression.slice();
    tmpProgression[randomIndex] = '..';
    return { question: tmpProgression, expectedAnswer: String(progression[randomIndex]) };
  };
  runEngine(rulesOfGame, questionToCheck);
};

export default guessElement;
