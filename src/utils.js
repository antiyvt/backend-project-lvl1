/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * returns random number from range, defined by numbers input parameter of type array
 * @example
 * range = [50, 100];
 * getRandomInt(100); // return random number from 50 to 100
 */
const getRandomInt = (min, max) => (min + Math.floor(Math.random() * (max - min)));

export default getRandomInt;
