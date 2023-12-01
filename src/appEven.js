import evenNumber from "./evenNumber.js";
import readlineSync from 'readline-sync';
import lodash from 'lodash';

const appEven = (name) => {
    for (let i = 0; i < 3; i++) {
        const randomNumber = lodash.random(0, 20);
        console.log('Question: ', randomNumber);
        const answer = readlineSync.question('Your answer: ');
        const correctAnswer = evenNumber(randomNumber);
        if (answer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
    return;
}

export default appEven;