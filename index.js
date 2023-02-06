let askQuestion = prompt("What do you want to ask: +, -, *, / ?");

let askNumbers = prompt('Write two numbers using commas between them');
let twoNumbers = askNumbers.split(',');

let oneNumber = twoNumbers[0];
let twoNumber = twoNumbers[1];

let sumAdd = +oneNumber[0] + +twoNumber[1];
let sumSub = +oneNumber[0] - +twoNumber[1];
let sumMult = +oneNumber[0] * +twoNumber[1];
let sumDiv = +oneNumber[0] / +twoNumber[1];

while (askQuestion !== '+' && askQuestion !== '-' && askQuestion !== '*' && askQuestion !== '/' && askQuestion !== ' ') {
    alert("sorry, you did not enter any of the options", askQuestion);
    askQuestion = prompt("What do you want to ask: +, -, *, / ?");
};

if (askQuestion === '+') {
    alert(`${oneNumber} + ${twoNumber} = ${sumAdd}`);
} else if(askQuestion === '-') {
    alert(`${oneNumber} - ${twoNumber} = ${sumSub}`);
} else if(askQuestion === '*') {
    alert(`${oneNumber} * ${twoNumber} = ${sumMult}`);
} else if(askQuestion === '/') {
    alert(`${oneNumber} / ${twoNumber} = ${sumDiv}`);
};
