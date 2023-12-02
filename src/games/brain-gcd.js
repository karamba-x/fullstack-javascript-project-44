import lodash from 'lodash';
import engineGame from '../index.js';
import whoYou from '../cli.js';

const countRounds = 3;

const appGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = whoYou();
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswer = 0;
  let question = '';
  for (let i = 0; i < countRounds; i += 1) {
    let valueOne = lodash.random(0, 100);
    let valueTwo = lodash.random(0, 100);
    question = `${valueOne} ${valueTwo}`;
    while (valueOne !== 0 && valueTwo !== 0) {
      if (valueOne > valueTwo) {
        valueOne %= valueTwo;
      } else {
        valueTwo %= valueOne;
      }
    }

    correctAnswer = String(valueOne + valueTwo);

    if (engineGame(question, correctAnswer, name) === false) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default appGcd;
