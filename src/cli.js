import readlineSync from 'readline-sync';

const whoYou = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello', name);
}



export default whoYou;