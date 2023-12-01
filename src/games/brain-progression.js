import engineGame from "../index.js";
import lodash from 'lodash';
import whoYou from "../cli.js";

const countRounds = 3;

const appProgression = () => {
    console.log('Welcome to the Brain Games!');
    const name = whoYou();
    console.log('What number is missing in the progression?');
    let correctAnswer = 0;
    let question = '';
    let array = [];
    for (let i = 0; i < countRounds; i++) {
        let firstNumber = lodash.random(0, 10);
        let emptyValue = lodash.random(0, 9);
        let nextNumber = 0;
        for (let i = 0; i < 10; i++) {
            nextNumber += firstNumber; 
            array.push(nextNumber)
        }
        correctAnswer = String(array[emptyValue]);
        for (let j = 0; j < 10; j++) {
            if (j === emptyValue) {
                question += '.. '
            } else {
                question += `${array[j]} `
            }
        }

        if (engineGame(question, correctAnswer, name) === false) {
            return;
        }

        array = [];
        question = '';
    }

    console.log(`Congratulations, ${name}!`);
}

export default appProgression;