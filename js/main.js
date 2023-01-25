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


let daysInAYear = 365;
let secondsInAYear = secondsInDay * daysInAYear;
console.log(secondsInAYear);

let age = 36;
console.log(age * secondsInAYear);
console.log(29 * secondsInAYear);


// оператор ++ увеличивает значение на 1 (называют инкрементом)
// оператор -- уменьшает значение на 1 (называют декрементом)

let higthFives = 0;
console.log(++higthFives);
console.log(++higthFives);
console.log(--higthFives);
// также эти опепраторы можно писать и после обьявления переменной- эфект будет прежним.однако после выполнея команды js вернёт первоначальное значение до инкремента и декремента.
console.log(higthFives++);

higthFives = 0;
console.log(higthFives++);
console.log(higthFives++);
console.log(higthFives++);
console.log(higthFives);



let x = 10;
x = x + 5;
console.log(x);


let score = 10;
console.log(score += 7);
console.log((score -= 3));


// стр 33