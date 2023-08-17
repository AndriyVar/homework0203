'use strict'

let symv = prompt('Введіть символ');
let numA = +prompt('Введіть число А');
let numB = +prompt('Введіть число Б');

switch(symv) {
    case '*':
        alert(numA * numB);
    break;
    case '/':
        alert(numA / numB);
    break;
    case '-':
        alert(numA - numB);
    break;
    case '+':
        alert(numA + numB);
    break;
}