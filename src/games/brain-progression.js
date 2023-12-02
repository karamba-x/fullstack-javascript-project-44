import lodash from 'lodash';
import engineGame from '../index.js';
import whoYou from '../cli.js';

const countRounds = 3;

const appProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = whoYou();
  console.log('What number is missing in the progression?');
  let correctAnswer = 0;
  let question = '';
  let array = [];
  for (let i = 0; i < countRounds; i += 1) {
    const firstNumber = lodash.random(0, 10);
    const emptyValue = lodash.random(0, 9);
    let nextNumber = 0;
    for (let k = 0; k < 10; k += 1) {
      nextNumber += firstNumber;
      array.push(nextNumber);
    }
    correctAnswer = String(array[emptyValue]);
    for (let j = 0; j < 10; j += 1) {
      if (j === emptyValue) {
        question += '.. ';
      } else {
        question += `${array[j]} `;
      }
    }

    if (engineGame(question, correctAnswer, name) === false) {
      return;
    }

    array = [];
    question = '';
  }

  console.log(`Congratulations, ${name}!`);
};

export default appProgression;
