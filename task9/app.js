'use strict'

let sum = +prompt('Введіть суму');
let curren = prompt('Виберіть валюту');

switch(curren) {
    case 'долар':
        alert(`${Math.floor(sum / 37.4)} USD`);
    break;
    case 'євро':
        alert(`${Math.floor(sum / 41.6)} EUR`);
    break;
    case 'злотий':
        alert(`${Math.floor(sum / 9.1)} PLN`);
    break;
    case 'фунт':
        alert(`${Math.floor(sum / 48.5)} GBP`);
    break;
    default:
        alert('Даної валюти немає');
    break;
}