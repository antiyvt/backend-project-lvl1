const correctAnswer = (question) => {
    const expression = question.split('');
    return (expression[1] === '+') ? (expression[0] + expression[2]) : (expression[0] * expression[2]);
  };