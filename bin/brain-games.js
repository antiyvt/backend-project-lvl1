#!/usr/bin/env node
import askName from '../src/index.js';
let nameIs = '';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    nameIs = askName();
    console.log(`Hello, ${nameIs}`);
};

greeting ();

export {nameIs, greeting};
