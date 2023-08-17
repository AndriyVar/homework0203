'use strict'

let userName = prompt('Введіть ім\'я');
let mountIn = prompt('Введіть щомісячний дохід');
let journey = prompt('Введіть суму витрат на транспорт');
let food = prompt('Введіть суму витрат на харчування');
let utilities = prompt('Введіть суму витрат на комунальні послуги');

let zalyshok = mountIn - journey - food - utilities;
console.log(`Залишок коштів: ${zalyshok}`);

let serednyaSyma = (journey - food - utilities) / 30;
console.log(`Середня сума в день: ${serednyaSyma}`);

let dohid = mountIn / 30;

if(dohid < 1000) {
    console.log('Низький дохід');
} else if(dohid > 1000 && dohid < 2000) {
    console.log('Нормальний дохід');
} else {
    console.log('Високий дохід');
}
