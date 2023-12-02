import engineGame from "../index.js";
import lodash from 'lodash';
import isEven from "../isEven.js";
import whoYou from "../cli.js";

const countRounds = 3;

const appEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = whoYou();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < countRounds; i++) {
    const question = lodash.random(0, 20);
    const correctAnswer = isEven(question);
    if (engineGame(question, correctAnswer, name) === false) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);

}

export default appEven;
