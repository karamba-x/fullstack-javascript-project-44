import engineGame from "../index.js";
import lodash from 'lodash';
import whoYou from "../cli.js";

const countRounds = 3;

const appCalc = () => {
    console.log('Welcome to the Brain Games!');
    const name = whoYou();
    console.log('What is the result of the expression?');
    let correctAnswer = 0;
    let question = '';
    for (let i = 0; i < countRounds; i++) {
        const valueOne = lodash.random(0, 20);
        const valueTwo = lodash.random(0, 20);
        switch (lodash.random(0, 2)) {
            case 0:
                question = `${valueOne} + ${valueTwo}`
                correctAnswer = String(valueOne + valueTwo);
                break;
            case 1:
                question = `${valueOne} - ${valueTwo}`
                correctAnswer = String(valueOne - valueTwo);
                break;
            case 2:
                question = `${valueOne} * ${valueTwo}`
                correctAnswer = String(valueOne * valueTwo);
                break;
        }

        if (engineGame(question, correctAnswer, name) === false) {
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);

}

export default appCalc;