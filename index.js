let askQuestion = prompt("What do you want to ask: +, -, *, / ?");

let askNumbers = prompt('Write two numbers using commas between them');
let twoNumbers = askNumbers.split(',');

let sumAdd = +twoNumbers[0] + +twoNumbers[1];
let sumSub = +twoNumbers[0] - +twoNumbers[1];
let sumMult = +twoNumbers[0] * +twoNumbers[1];
let sumDiv = +twoNumbers[0] / +twoNumbers[1];

while (askQuestion !== '+' && askQuestion !== '-' && askQuestion !== '*' && askQuestion !== '/' && askQuestion !== ' ') {
    alert("sorry, you did not enter any of the options", askQuestion);
    askQuestion = prompt("What do you want to ask: +, -, *, / ?");
};

if (askQuestion === '+') {
    alert(`${twoNumbers[0]} + ${twoNumbers[1]} = ${sumAdd}`);
} else if(askQuestion === '-') {
    alert(`${twoNumbers[0]} - ${twoNumbers[1]} = ${sumSub}`);
} else if(askQuestion === '*') {
    alert(`${twoNumbers[0]} * ${twoNumbers[1]} = ${sumMult}`);
} else if(askQuestion === '/') {
    alert(`${twoNumbers[0]} / ${twoNumbers[1]} = ${sumDiv}`);
};
