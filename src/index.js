import readlineSync from 'readline-sync';

const engineGame = (question, correctAnswer, name) => {
  console.log('Question:', question);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }

  return true;
};

export default engineGame;
