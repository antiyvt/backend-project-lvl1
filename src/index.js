import readlineSync from 'readline-sync';

const askName = () => {
  const nameIs = readlineSync.question('May I have your name? ');
  return nameIs;
};
export default askName;
