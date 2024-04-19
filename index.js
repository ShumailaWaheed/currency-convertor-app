#! /usr/bin/env node
import inquirer from 'inquirer';
// Define currency conversion rates (relative to USD)
const currency = {
    USD: 1, // Base currency
    PKR: 280,
    YEN: 0.5454,
    Lira: 0.115149,
    EUR: 0.003320,
    IND: 0.299565,
    Riyal: 0.013489,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter From Currency',
        type: 'list',
        choices: ['USD', 'PKR', 'YEN', 'Lira', 'EUR', 'IND', 'Riyal']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'PKR', 'YEN', 'Lira', 'EUR', 'IND', 'Riyal']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number',
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd based currency  
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
