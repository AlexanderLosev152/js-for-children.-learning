// рисуем столько котиков сколько захотим
let drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    // выведи в консоль
    console.log(i + " =^.^=");
  }
};
drawCats(3);


// КОМЕНТАРИИ :
// мелкий коментарий
/* болльшой комментарий на несколько строк */


/*
в js числа зписываються так :
5;

стороки выглядят так :
"привет я сторока"

Булевы значения могут хранить одну из двух величин — 
либо это true («истина»), либо false («ложь»).
true;
false ;
*/

// = -присвоить

// писать var нужно при создании переменной,а не при её использовании.

let numberS = 1 + 3;
let numberO = 8;
console.log(numberS/numberO);


let secondsInAMinute = 60;
let minutesInAHour = 60;
let secondsInAHour = secondsInAMinute * minutesInAHour;
console.log(secondsInAHour);

let hoursInADay = 24;
let secondsInDay = secondsInAHour * hoursInADay;
console.log(secondsInDay);
