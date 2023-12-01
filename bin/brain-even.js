#!/usr/bin/env node
import whoYou from "../src/cli.js";

import appEven from "../src/appEven.js";

console.log('Welcome to the Brain Games!');
const name = whoYou();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
appEven(name);



