"use strick"

let popupVizov = document.querySelector('.popup-vizov');

console.log(popupVizov);

const popupName = popupVizov.getAttribute('href').replace('#','');
    const popupNameId = document.getElementById(popupName);

console.log(popupName);
console.log(popupNameId);

popupVizov.addEventListener("click", function(){
    const popupName = popupVizov.getAttribute('href').replace('#','');
    const popupNameId = document.getElementById(popupName);
    popupOpen(popupNameId)
    
    
})

const popupCloseIcon = document.querySelector('.popup-close');
popupCloseIcon.addEventListener("click", function (){
        popupClose(popupNameId);
		
});





function popupOpen(popupNameId) {
    popupNameId.classList.add('open');
}

function popupClose(popupNameId) {
    popupNameId.classList.remove('open');

}


//=====================================================================================================================================================

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// start();



// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actros: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     renenberMyFilms: function() {
//         for (let i = 0; i <2; i++){
//             let a = prompt('Один из последних просмотренных фильмов?','').trim(),
//                 b = prompt('На сколько вы его оцениваете?','');
//             if ( a != null && b != null && a!= '' && b != '' && a.length<50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('good');
//             } else {
//                 console.log('error'); 
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count  < 10){
//             console.log('Просмотрено мало фильмов');
//         } else if (personalMovieDB.count>=10 && personalMovieDB.count<= 30){
//             console.log('классический зритель');
//         } else if (personalMovieDB.count > 30 ){
//             console.log('киноман');
//         } else {
//             console.log('error');
//         }
//     },
//     showMyBD: function(hidden) {
//         if (!hidden){
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function(){
//     if (personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 0; i < 3; i++){
//             let genre = prompt(`Ваш любимы жанр под номером ${i+1}`,'');
//              if (genre === '' || genre == null) {
//                 console.log('Вы ввели некоректные данные или нажали назад');
//                 i--;
//              } else {
//                 personalMovieDB.genres[i] = genre;
//              }   
//         }
//     personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     })    
//     }
// };



 




// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh',
//  'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'yaki'];

//  const newStudents = students.slice().sort();

// // let t = newStudents.slice(0,3);
// // newStudents.splice(0,3);
// // console.log(t);
// // console.log(newStudents);
// // let t1 = newStudents.slice(0,3);
// // newStudents.splice(0,3);
// // console.log(t1);
// // console.log(newStudents);


// // let arr = [];
// // for (i = 0; i < 3; i++){
// //     arr[i] = newStudents.slice(0,3);
// //     newStudents.splice(0,3);
// // }
// // console.log(arr);


// function sortStudentsByGroups2(arr) {
//     const newStudents = arr.slice().sort();
//     let ar = [];
//     for (i = 0; i < 3; i++){
//         ar[i] = newStudents.slice(0,3);
//         newStudents.splice(0,3);
//     }
//     if (newStudents.length > 0){
       
//         return [ar,`Оставшиеся студенты: ${newStudents}`];
       
//     } else {
       
//         return [ar,`Оставшиеся студенты:-`];
//     }
    
//     };

// console.log(sortStudentsByGroups2(students));


// let r = [[1,2,3],[4,5,6],[7,8,9],'fghg'];
// let r2 =[[1,2,3],[4,5,6],[7,8,9]];
// console.log(typeof(r));
// console.log(typeof(r2));


// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students));


//=================================================================
// let y = '     123       1    1    ';
// console.log(y.trim()); //удаление пробелов

// let obj = {name:'evgen', surname:'bebur', age:'32'};
// console.log(Object.keys(obj).length);


// let arr= [1,6,8,4,2];
// arr.pop(); // удалили последний объект
// arr.push(15); // добавили в конец 15
// console.log(arr);


//=====================================================================================================================================================
// let num = 50;
// if (num  === 50) {
//     console.log('ok');
// } else if (num > 50) {
//     console.log('ne ok');

// } else {
//     console.log('sovsem ne ok');
// }

// (num === 50) ? console.log('okay') : (num > 50) ? console.log('ne okay') : console.log('sovsem ne okay');


// let qwe = 5;
// while ( qwe >=  5 && qwe <= 10 ){
//     console.log(qwe);
//     qwe++;
// }

//  console.log('next2');

//  for ( i = 20; i >= 10; i--){
//     if ( i === 13) break;
//     console.log(i);
    
// }

// console.log('next3');

// for (let i = 1; i <=10; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     } 
// }

// console.log('next4');

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// console.log('next5'); 
// let j = 2;
// while ( j<= 16) {
//     if (j % 2 === 0) {
//         j++;
//         continue;
//     } else {
//         console.log(j);
//         j++;
       
        
        
//     } 
// }


// console.log('next6'); 

// let arr = [];
// let k = 0;
// for ( i = 5; i <= 10; i++){
//     arr[k] = i;
//     k++;
// } 
// console.log(arr);


// let result = [];
// for ( i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// } 
// console.log(result);

// console.log('next111'); 
// function fifthTask() {
//     const arrayOfNumbers = [];
//     let k = 0;
//         for ( i = 5; i <= 10; i++){
//          arrayOfNumbers[k] = i;
//          k++;
// }
//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return arrayOfNumbers;
// }
// console.log(fifthTask());


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for ( i = 0; i < data.length; i++){
//     if (typeof(data[i]) === 'number'){
//         data[i] *=2;
//     } else {
//         data[i] += " - done";
//     }
// }

// let result = [];
// let j = 0;
// for ( i = (data.length-1); i >= 0 ; i--){
 
//     result[j] = data[i];
//     j++;

// }
// console.log(result);


// let zv = '*';
// let pr = ' ';

// for ( i = 0; i < 6; i++){
//     console.log(pr,zv);
//     zv += '*';
//     pr += ' ';
// }


// let abc = 'abcdefj';
// console.log(abc[5]);

// let result = '';
// const lines = 5;

// for (let i = 1; i < lines; i++) {
//     for (let k = (lines-1); k > i; k--) {
//         result +=  " ";
//     }
//     for (let j = 0; j < i; j++) {
//         if (j === 0){
//         result +=  "*";
//         } else {
//             result +=  "*" + "*"; 
//         }
        
//     }
    
//     result += '\n';
// }
// console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

//============================================================


// console.log('examole1');
// function sayhello(name) {
//     return (`Привет, ${name}!`);
// }

// console.log(sayhello("Petya"));

// console.log('examole2');
// function returnNeighboringNumbers(num) {
//     let result = [];
//     result[0] = num - 1;
//     result[1] = num;
//     result[2] = num + 1;
//     return result; 
// };


// console.log(returnNeighboringNumbers(6));

// console.log('examole3');

// function getMathResult(num1, num2) {
//     let result = num1;
//     if (num2 >=1 && typeof num2  === 'number'){
//         let defis = '---';
        
//         for (i = 2; i < (num2+1); i++){
//             result +=  defis + (num1*i);
            
//         } return result;
     

//     } else{
//         return result;
//     }
// }

// console.log(getMathResult(10,-5));

//=======================================================================


// function createCounter() {
//   let counter = 0
//   console.log('1',counter);
//    const myFunction = function() {
//      counter = counter + 1
//      console.log('12',counter);
//      return counter
//    }
//    return myFunction
//  }
//  const increment = createCounter()
//  console.log(increment);
//  const c1 = increment();
//  console.log(c1);
//  const c2 = increment();
//  const c3 = increment();
//  console.log('example increment', c1, c2, c3)



// const test = '12.2px';
// console.log(parseFloat(test));


// const logg = 'Hello world!';
// console.log(logg.slice(6,11));


//==========================================================

// function calculateVolumeAndArea(num) {
//     if (num === parseInt(num) && num > 0){
//     let square = (num*num)*6;
//     let hacim = num*num*num;
//     console.log(`Обьем куба: ${hacim}, площадь всей поверхности: ${square}`);
//     } else{
//     console.log(`При вычеслении возникла ошибка`);    
//     }
// }

// calculateVolumeAndArea(-5);

// function getCoupeNumber(num) {
    
//     if (num === parseInt(num) && num >=1 && num <=36){
//         console.log(Math.ceil(num / 4));
//     }else if (num === parseInt(num) && num == 0 || num > 36){
//         console.log('Таких мест в вагоне не существует');
//     } else {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
// }

// getCoupeNumber(0);


// function getTimeFromMinutes(num) {
//     let chasov = 'ов';
//     let chasa = 'а';
//     let chas = '';
//     let minut = num % 60;
//     let hour = Math.floor(num / 60);
//     if(num === parseInt(num) && num >=0) {
//         if (hour == 0 || hour > 4) {
//             console.log(`${hour} час${chasov} и ${minut} минут`);
//         } else if (hour == 1){
//             console.log(`${hour} час${chas} и ${minut} минут`);
//         } else {
//             console.log(`${hour} час${chasa} и ${minut} минут`);
//         }
//     } else console.log("Ошибка, проверьте данные");{

//     }
// }

// getTimeFromMinutes(559);

// console.log(Math.ceil(59 / 60));
// console.log(Math.round(59 / 60));
// console.log(Math.floor(59 / 60));

// console.log(`${} час${} и ${} минут`);

// function findMaxNumber(a,b,c,d) {
//     if (a,b,c,d === parseInt(a,b,c,d)) {
//         if ( a > b){
//             let num1 = a;
//             return num1;
//         } else {
//             let num1 = a;
//             return num1;
//         }
//         if ( c > d){
//             let num2 = c;
//             return num2;
//         } else {
//             let num2 = d;
//             return num2;
//         }

//     }else {
//         console.log(0);
//     }
// }

//FIBONACHI==========================================================
// function findMaxNumber(a,b,c,d) {
//     if (typeof(a) !== 'number' ||
//     typeof(b) !== 'number' ||
//     typeof(c) !== 'number' ||
//     typeof(d) !== 'number') {
//     return 0;
// } else {
//     return Math.max(a, b ,c, d);
// }
// }


// console.log(findMaxNumber(11,5,8,7));



// function fib(num) {
//     let arr = [];
//     let str = '';
//     if (num <= 0 || typeof(num) !== 'number'){
//         return str;
        
//     }else if ( num === 1) {
//         return 0;
    
//     }else if  (num >= 2 ){
//         arr[0] = 0;
//         arr[1] =1;
//         for (i = 2; i <= (num-1); i++){
//             arr[i]= arr[i-2] + arr[i-1];

//     }return arr;
//     }
// }
// console.log(fib("1"));

// console.log(typeof(fib(1))); 
//FIBONACHI==========================================================


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// let a  = personalPlanPeter.skills.exp;
// console.log(a);

// for (let key in personalPlanPeter) {
//     console.log(key);
// }


// console.log(Object.keys(personalPlanPeter).length);



// console.log(qwe(personalPlanPeter));
// const {languages,programmingLangs,exp} = personalPlanPeter.skills;

// console.log(Object.keys(programmingLangs).length);
// for (let key in programmingLangs){
//     console.log(`Язык ${key} изучен на ${programmingLangs[key]}`);
// }




// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         const {age} = plan;
//         const {languages} = plan.skills;

//         let str = `Мне ${plan.age} и я владею языками: `;

//         languages.forEach(function(lang){
//             str += `${lang.toUpperCase()}`;
//         });
//         return str;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function qwe(array){
//     const {languages,programmingLangs,exp} = personalPlanPeter.skills;
//     return exp;
// }
// console.log(qwe(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
    
//         for (let key in programmingLangs){
//             str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        
//     } 
//         return str;
    
// }   
// console.log(showProgrammingLangs(personalPlanPeter));



// const arr = { a : 1, b: 2, c:3, d:{ 10:'aa' , 20: 'bb'  }};
// const add = {
//     f: 17,
//     e: 20
// };



// const newArr = Object.assign(arr, add);
// console.log(newArr);
// console.log('1111111');
// console.log(add);
// console.log(arr['d']['10']);
// arr['d']['10'] = 'gggg';
// add.f = 233;
// console.log(add);


// console.log(newArr);


// function log(a,b,c,){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let num = {a:1, b:2, c:3, d:{aa:11, bb:22, cc:33}};
// let ObjNum = {...num};

// num.d.aa = 'qwerty';

// // console.log(ObjNum);



// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length >0){
//     return `Семья состоит из: ${family.join(' ')}`;
// } 
// return `Семья пуста`;
// }

// console.log(family.length);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (city in arr){
//         console.log(arr[city].toLowerCase());
//     }
// }
// standardizeStrings(favoriteCities);


// const someString = 'This is some strange string';
// const someString2 = 123;

// function reverse(str) {
//     if (typeof(str) === 'string'){
//         return str.split("").reverse().join("");
//     }else {
//         return "Ошибка!";
//     }
// }

// console.log(reverse(someString));

// console.log(typeof(someString) === 'string');


// let arr2 = [1,2,3,4,5];
// console.log(arr2.length);
// function reverseArr(arr) {
//     let ur = [];
//     let j = 0;
//     for (let i = (arr.length-1); i >= 0; i--){
        
//         ur[j] = arr[i];
//         j++;
        
//     }return ur;
// }
// console.log(reverseArr(arr2));




// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


// let arr = [...baseCurrencies,...additionalCurrencies];

// console.log(arr[2]);


// function availableCurr(arr, missingCurr) {
//     let rrt = [];
//     let j = 0;
//     for (let i = 0; i <= (arr.length-1); i++){
//         if (arr[i] !== missingCurr){
//             rrt[j] = arr[i];
//             j++;
//         }else {
//             continue;
//         }
//     } console.log(`Доступные валюты:\n${rrt.join('\n')}`);
// }

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');

//ООП==================================================================

// let soldier = {health: 450, armor: 150};

// const john = Object.create(soldier);

// console.log(john.armor);

//ООП==================================================================


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
    
//  let { shops} = data;
//  let allSquare = 0;
//  for (let shop in shops) {
//      let item = Object.values(shops[shop]);
//      allSquare += item[0] * item[1];
         
//  };
//  if ((data.height * allSquare * data.moneyPer1m3) <= data.budget) {
//     return 'Бюджета достаточно';
//  } else {
//     return 'Бюджета недостаточно';
//  };
// }

// console.log(isBudgetEnough(shoppingMallData));

//===========================================================



// function cC() {
//     let con = 0;

//     const mF = function() {
//         con = con + 1;
//         return con;
//     }
//     return mF;
// }
 
// const inc = cC();
// const c1 = inc();
// const c2 = inc();
// const c3 = inc();

// console.log(c1, c2,c3);

//=======================================================================


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// let {openNow} = restorantData; //не обявлена переменная

// function isOpen(prop) { 
//     let answer = '';
//     !prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) { 
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }



// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) { 
//     const copy = JSON.parse(JSON.stringify(data));

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData);


// const deep = { a:1, b:2, c:{cc:33, dd:44}, e:5};					
// const arr = Object.assign({}, deep);
// arr.c.cc =  1001;

// console.log(deep);					
// console.log(arr);

//=======================================================================


const name1 = document.createElement('div'), 
      name2 = document.createElement('div'),
      wrapper = document.querySelector('.wrapper');
name1.classList.add('black'); //добавляем класс
name1.innerHTML = "<h1>Privet</h1>";//можно вставить html структуру
name2.textContent = 'privet Mr.X';//можно вставить только текст, это защита от вставки скриптов пользователем

name2.classList.add('black');



wrapper.append(name1); //вставляет элемент в конец wrapper
// wrapper.appendСршдв(name1); //старый вариант

wrapper.prepend(name2);//вставляет элемент в начало wrapper

// hearts[0].before(div); //вставляет элемент перед первым сердцем
// hearts[0].after(div);//вставляет элемент после первого сердца

// wrapper.insertBefore(name1, hearts[1])// первый аргумент(сам элемент который передаем, второй аргумент это перед каким элементом вставляем)


// circles[0].remove(); //удаляем круг с индексом 0
// wrapper.removeChild(hearts[1]);//удаляем круг с индексом 1 старый вариант


// hearts[0].replaceWith(circles[0]); //меняем положение элемента, 1 аргумент элемент, 2 аргумент какой элемент заменяем
// wrapper.replaceChild(circles[0], hearts[0]);


name1.insertAdjacentHTML('afterbegin','<h2>Hello</h2>');//вставка HTML структуры в HTML документ, первый аргумент куда, второй сама HTML структура
// afterbegin перед началом элемента name1
// afterend после конца элемента name1
// beforebegin после начала элемента name1
// beforeend после конца элемента name1










