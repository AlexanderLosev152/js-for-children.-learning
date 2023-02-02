// // рисуем столько котиков сколько захотим
// let drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i++) {
//     // выведи в консоль
//     console.log(i + " =^.^=");
//   }
// };
// drawCats(3);

// // КОМЕНТАРИИ :
// // мелкий коментарий
// /* болльшой комментарий на несколько строк */

// /*
// в js числа зписываються так :
// 5;

// стороки выглядят так :
// "привет я сторока"

// Булевы значения могут хранить одну из двух величин — 
// либо это true («истина»), либо false («ложь»).
// true;
// false ;
// */

// // = -присвоить

// // писать var нужно при создании переменной,а не при её использовании.


// //  ЧИСЛА

// let numberS = 1 + 3;
// let numberO = 8;
// console.log(numberS / numberO);

// let secondsInAMinute = 60;
// let minutesInAHour = 60;
// let secondsInAHour = secondsInAMinute * minutesInAHour;
// console.log(secondsInAHour);

// let hoursInADay = 24;
// let secondsInDay = secondsInAHour * hoursInADay;
// console.log(secondsInDay);

// let daysInAYear = 365;
// let secondsInAYear = secondsInDay * daysInAYear;
// console.log(secondsInAYear);

// let age = 36;
// console.log(age * secondsInAYear);
// console.log(29 * secondsInAYear);

// // -------------------------------------------------------------------------

// // ИНКРЕМЕНТ И ДИСКРЕМЕНТ

// // оператор ++ увеличивает значение на 1 (называют инкрементом)
// // оператор -- уменьшает значение на 1 (называют декрементом)
// // x = x + 5 - одно и тоже что и  x +=5
// // x = x -5 - одно и тоже что и x -=5

// let higthFives = 0;
// console.log(++higthFives);
// console.log(++higthFives);
// console.log(--higthFives);
// // также эти опепраторы можно писать и после обьявления переменной- эфект будет прежним.однако после выполнея команды js вернёт первоначальное значение до инкремента и декремента.
// console.log(higthFives++);

// higthFives = 0;
// console.log(higthFives++);
// console.log(higthFives++);
// console.log(higthFives++);
// console.log(higthFives);

// let x = 10;
// x = x + 5;
// console.log(x);

// let score = 10;
// console.log((score += 7));
// console.log((score -= 3));

// let balloons = 100;
// console.log((balloons *= 2));
// console.log((balloons /= 4));


// // ----------------------------------------------------------------------


// // СТРОКИ 

// // стороки всегда вы кавычках,не важно илинарные или двойные
// // "привет мир"
// // строки как и числа также можно хранить в переменных


// // также можно присвоить строковое значение перменной,где раньше хранилось число
// let  myThing = 5;
// myThing = "это строка" 
// console.log(myThing);

// // а если записать чимло в кавычках то это будет строка
// // сложив числовые значения

// let numberNine = 9; //число
// let stringNine = "9"; //строка
// console.log(numberNine + stringNine);
// 99
// console.log(numberNine + numberNine);
// 18
// console.log(stringNine + stringNine);
// 99

// // с помощью оператора + можно обьединять строки
// // js не ставит пробелов,их нужно ставить самому
// let greeting  = "Привет "
// let myName = "Ник"
// console.log(greeting + myName);

// // чтобы узнать длину строки нужно добвать - .length
// // lendth -длина 
// console.log("супердлинная строка".length);

// let java = "Java"
// console.log(java.length);
// let script = "Script";
// console.log(script.length);
// let javascript = "Javascript";
// console.log(javascript.length);

// // Получение отдельного символа строки
// // чтобы получть символ из строки используйте квардратные скаорбки []
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);


// //Получение среза строки 
// // slice - часть
// // .slice(1,5) - 1я начало. а 5я конец.цифры как пример
// console.log("супердлинная строка".slice(5));
// // .slice(1,5) - 1я начало. а 5я конец.цифры как пример
// console.log("супердлинная строка".slice(13));
// // по сути мы попросили js вырезать из строки то что нам нужно


// // Превод стороки в заглавнный и строчный регистр
// //  toUpperCase() - в верхний регистр.возвращает новую строку в которой,все символы заглавные
// console.log("эй как дела?".toUpperCase()); 
// console.log("эй как дела?".toUpperCase());
// let topoc = "эй как дела?".toUpperCase();
// let topic = topoc[0];
// console.log(topoc[0]);
// let small = "эй как дела?".toLowerCase(); 
// let smalls = small.slice(1,12)
// console.log(topic + smalls);

// // toLowerCase() -в нижний регистр.все символы строчные 
// // console.log("ЭЙ КАК ДЕЛА?".toLowerCase()); 

// // укороченный вариант
// var sillyString = "эЙ, кАК деЛа?";
// console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()); 

// // var sillyString = document.getElementById(hello);
// // console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase()); 


// let string = document.getElementsByTagName("h1");
// let write = ("<h1>", string[0].innerHTML, "</h1>");
// console.log(write);
// // var lowerString = sillyString.toLowerCase();
// // var firstCharacter = lowerString[0];
// // var firstCharacterUpper = firstCharacter.toUpperCase();
// // var restOfString = lowerString.slice(1);
// // console.log(firstCharacterUpper + restOfString); 
// // console.log(string.charAt(0).toUpperCase() + string.slice(1));
// // console.log();
// // console.dir(myHtmlEl);

// // button.onclick = () => {
// //   window.open("https://javascript.info");
// // };

// setTimeout(wakeUpUser, 1000)
//   function wakeUpUser() {
//     alert('warning')
//   }

// var price = 28.99
// var discont = 10 
// var total = price - (price * (discont / 100))
// if (total > 10) {
//   freeShipping()
// }

// var count = 10
// while (count > 0) {
//   juggle()
//   count = count - 1
// }

// var dog = {name: 'Rover', weigth: 35}

// if (dog.weigth > 30) {
//   alert('WOOF WOOF');
// } else {
//   alert('woof woof')
// }


// ПЕРЕМЕНННЫЕ И ЗНАЧАНИЯ
let winners = 2 // число
let name = 'Duce' // сторока
let isEligible = false // или true - булевы значения
// ----------------------

// имя перменной должно начинаться с буквы , подчеркивания или знака доллар$/
// потом могут следовать буквы и цифры , подчеркивания знаки припинания -в любом колличестве


// ЦИКЛЫ
