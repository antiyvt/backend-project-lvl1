const askName = () => {
  console.log('Welcome to the Brain Games!');
  const nameIs = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameIs}`);
  return nameIs;
};