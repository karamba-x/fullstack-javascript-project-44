import lodash from 'lodash';
import engineGame from '../index.js';
import isPrime from '../isPrime.js';
import whoYou from '../cli.js';

const countRounds = 3;

const appPrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = whoYou();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < countRounds; i += 1) {
    const question = lodash.random(0, 20);
    const correctAnswer = isPrime(question);
    if (engineGame(question, correctAnswer, name) === false) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default appPrime;
