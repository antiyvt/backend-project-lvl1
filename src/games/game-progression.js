import { getRandomInt, engine } from '../index.js';

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

const guessElement = (numberRange = 100) => {
  const questionToCheck = () => {
    const numberOfElements = 10;
    const firstElement = getRandomInt(numberRange);
    const step = getRandomInt(10);
    const progression = getRandomProgression(firstElement, numberOfElements, step);
    const randomIndex = getRandomInt(numberOfElements);
    const tmpProgression = progression.slice();
    tmpProgression[randomIndex] = '..';
    return { question: tmpProgression, expectedAnswer: String(progression[randomIndex]) };
  };

  engine('What number is missing in the progression?', questionToCheck);
};

export default guessElement;
