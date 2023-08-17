'use strict'

let passwordUser = prompt('Введіть пароль');

if(passwordUser == 'Step' || passwordUser == 'Web' || passwordUser == 'JavaScript') {
    alert('Підтверджено');
} else {
    alert('Скасовано');
}