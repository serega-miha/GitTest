

let answers = [],
  questions = [
    'what is your name?',
    'What is your surname?',
    'how old you?'
  ];

// for ( i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i]);
// }

let i = 0;
// do {
//     answers[i] = prompt(questions[i]);
//     i++;
// } while (i < questions.length);

// while (i < questions.length) {
//     answers[i] = prompt(questions[i]);
//     i++;
// }
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// console.log(answers);

//============================================================================================================
// function myFirstApp(name, age) {
//     alert(`Привет, меня зовут ${name} и это моя первая программа!`);

//     function showSkills() {
//         let skills = ['html', 'css', 'js'];
//         for ( i = 0; i < skills.length; i++) {

//             document.write(`Я владею: ${skills[i]} <br \/>`);
//             }

//     }
//     showSkills();
//     function checkAge() {

//         if (age < 18) {
//             alert('У вас отличное стремление к учебе');
//         } else {
//             alert('У ваас все получить , продолжайте учиться');
//         }

//     }
//     checkAge();
//     function calcPow(num) {
//         num = num*num;
//         console.log(num);
//     }
//     calcPow(3);
// }

// myFirstApp('Ivan','12');

// const num = 6;

// const isEven = num => num % 2 === 0;

// функция увеличивает полученное число num на 10
// const increaseNum = num => num + 10;




// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

// console.log(isEven(num));
// console.log(increaseNum(num));

// console.log(isEven(increaseNum(num)+1));



// const finalGrade => (exam, projects) {
//     if (exam  > 90 || projects > 10) {
//         return 100;
//     }else if (exam  > 75 && projects >= 5) {
//         return 90;
//     }else if (exam  > 50 && projects >= 2) {
//         return 75;
//     } else {
//         return 0;
//     }
// };
//================================================
// const factorial = (n) => {
//     if (n === 0) {
//       return 1;
//     }
//     else {
//       return n * factorial(n - 1);
//     }
//   }

//   console.log(factorial(7));

//=================================
//   const sequenceSum = (begin, end) => {
//     // BEGIN (write your solution here)
//     if (begin > end) {
//         return NaN
//     }else if (begin === end){
//         return begin;
//       }else  {
//         return begin + sequenceSum(begin+1,end);

//       } 

//   };
//   console.log(sequenceSum(0,0));


//   const factorial = (n) => {
//    const iter = (counter, acc) => {
//       if (counter === 1) {
//         return acc;
//       }
//       return iter(counter + 1, counter * acc);
//     };

//     return iter(n, 1);
//   };
// console.log(factorial(5));


// const smallestDivisor = (num) => {
//     // BEGIN (write your solution here)
//     let b = 2;
//     if (num === 1) {
//         return num;
//     } else if (num % b === 0) {
//         return b;
//     } 

//     const iter = (b, num) => {
//               if (num % b === 0) {
//                 return b;
//               }
//               return b + 1 ;
//             };

//     return iter(3,num);

//     // END
//   };


// console.log(smallestDivisor(121));







// const factorial2 = (n) => {
//   if (n === 1) {
//     return n;
//   } else if (n < 1) {
//     return NaN;
//   }
//   let i = 2;
//   const iter = (i, n) => {
//     if (n % i === 0) {
//       return i;
//     }
//     return iter(i + 1, n);
//   };

//   return iter(i, n);
// };
// console.log(factorial2(37));





// const isPrime = (n) => {
//   if (n === 1) {
//     return false;
//   } else if (n < 1) {
//     return false;
//   }
//   let i = 2;
//   const iter = (i, n) => {
//     if (n % i === 0) {
//       if (i < n) {
//         return false;
//       } return true;
//     }
//     return iter(i + 1, n);
//   };


//   return iter(i, n);
// };
// console.log(isPrime(3));
//================================================

// const getTriangleArea = (h, b) =>{
//   let A = 1/2 * h * b;
//   return A;
// };
// console.log(getTriangleArea(15,12));


//  const function = (n) => {
//   return getTriangleArea(n,square(n)/2)
// };
// export default function;

//=====================================


// const isRightNum = num => (num >= 11) && (num !== 25);


// const isRightNum = (num) => {
//   const res = (num >= 10) && (num !== 25);
//   return res;
// };

// const isRightNum = num => (num > 10) && (num !== 25);

// console.log(isRightNum(11));



// //=======================================
// const square = (num) =>{
//   return num*num;
// }

// const sumOfSquares = (num1, num2) =>{
//   return square(num1)+square(num2);
// }

// const squareSumOfSquares = (num1, num2) =>{
//   return sumOfSquares(num1,num2)**2;
// }


// console.log(square(5));
// console.log(sumOfSquares(5,10));
// console.log(squareSumOfSquares(2,3));
//=======================================================================
// const length = (str) => str.length;
// const toUpperCase = (str) => str.toUpperCase();

// let n = '   Ad sd';

// const bigLettersCount = (str) => {
//   let i = 0;
//   let result = 0;
//   while (i < length(str)) {
//     if ((str[i]) === toUpperCase(str[i])){
//       result++;
//       i++;
//     } else {
//       i++;
//     }

//   }
//   return result;

// };
// console.log(bigLettersCount('   Ad sd'));


//=======================================================================

// const toUpperCase = (str) => str.toUpperCase();
// let t = 'Pr Ivet';
// console.log((t[2]) === toUpperCase(t[2]));
// console.log(t[2]);

//========================================================================
// let b = 317812;
// let bb = '317812';
// let Gresult = 0;
// let yyy = Gresult + (bb[0]*1) + (bb[1]*1);
// console.log(yyy);
// console.log('privet',(bb[0]*1) + (bb[1]*1));
// console.log(((String(b)[0])*1) + ((String(b)[1])*1));
// console.log(String(b)[2]);


// const length = (str) => str.length;

// const addDigits = (num) => {
//     let tempNum = String(num);
//     let i = 0;
//     let result = 0;
//     while (i < tempNum.length) {
//       result = result + (tempNum[i]*1);
//         if (result > 9){
//         result = (((String(result)[0])*1)+ ((String(result)[1])*1));
//         i++;

//         } else {
//         i++;
//         }


//     }
//     return result;
//   }
// console.log(addDigits(728264));





// let c = 'dfg dfg'


// console.log(c.length);
// console.log(length(String(b)));

//==============================================================
// const length = (str) => str.length;
// const toUpperCase = (str) => str.toUpperCase();

//   let solution2 = '  hello,   world!';


//   let arr2 = solution2.split(' ');

// console.log(arr2);






// for ( let i = 0; i < arr.length; i++){
//   arr[i] = arr[i].replace(arr[i][0], toUpperCase(arr[i][0]));
// }
// console.log(arr);

// let rra = arr.join(' ');
// console.log(rra);


// const solution = (str) => {
//   let arr = str.split(' ');
//   for ( let i = 0; i < arr.length; i++){
//     if (arr[i] === ''){
//       continue;
//     }else {
//     arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
//     }
//   }
//   let rra = arr.join(' ');
//   return rra;
// }

// console.log(solution(' many different words inside sentence')); 

//===================================================

// const smallestDivisor = (num) => {
//   // BEGIN (write your solution here)

//   let i = 2;
//   const iter = (i, n) => {
//     if (n % i === 0) {
//       return i;
//     };
//     return iter(i + 1, n);
//   };
//   if (n === 1) {
//     return n;
//   }
//   return iter(i, n);
//   // END
// };
// console.log(smallestDivisor(121));


// const smallestDivisor = (n) => {
//   if (n === 1) {
//     return n;
//   } else if (n < 1) {
//     return NaN;
//   }
//   let i = 2;
//   const iter = (i, n) => {
//     if (n % i === 0) {
//       return i;
//     }
//     return iter(i + 1, n);
//   };

//   return iter(i, n);
// };
// console.log(smallestDivisor(121));

//скрипт для изменениЯ цвета бокса=======================================================



const colors = document.querySelectorAll('.size');
const screen = document.querySelector('.screen');
const screenBox = document.getElementById('box');


colors.forEach(color => {
  color.addEventListener('click', function (e) {
    screenBox.removeAttribute('class');
    let colorVal = color.getAttribute('value');
    screenBox.classList.add(colorVal);
  })
})

//====================================================================================

const wrapper = document.querySelector('.wrapper');
const btns = wrapper.getElementsByTagName('button');



wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {
    console.log('hello');
    btns[0].classList.toggle('red');
  }
})


const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);



//меняем язык=======================================================================================


const lgParent = document.querySelector('.menu-languages'),
  lg = document.querySelectorAll('.lg'),
  page = document.querySelectorAll('.page');


function hidePage() {
  page.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show');
  });
  lg.forEach(tab => {
    tab.classList.remove('active');
  });
};

function showPage(i = 0) {
  page[i].classList.add('show');
  page[i].classList.remove('hide');
  lg[i].classList.add('active')
}


hidePage();
showPage();

lgParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('lg')) {
    lg.forEach((item, i) => {
      if (target == item) {
        hidePage();
        showPage(i);
      }
    });
  }
});
//=======================================================================================
// setTimeout
// setInterval
// clearTimeout
// clearInterval

const btnStart = document.querySelector('.start-time');
let timeId,
  ii = 0;

function myAnimation() {
  const elem = document.querySelector('.little-block');
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 320) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + 'px';
    }
  }
}

btnStart.addEventListener('click', () => {
  console.log('privet');
  myAnimation();
});

const elem = document.querySelector('.little-block');
// console.log(elem);


// btnStart.addEventListener('click', () => {
//   timeId = setInterval(logger, 500);
// })


// function logger() {  
//   if (ii === 3) {
//     clearInterval(timeId);
//     console.log('konec');
//   }
//   setTimeout(console.log('hi'));
//   ii++;
// };

// let id =setTimeout(function log() {
//   console.log('hello');
//   id = setTimeout(log, 500);

// }, 500) ; //settimeout с помощью рекурсивного подхода


const now = new Date();

// console.log(now.getDate());

//====================================================================



class MenuCard {
  constructor(src, alt, title, text, price, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.text = text;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = +this.price * this.transfer;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="zag-cart">
                <div class="cart__img">
                    <img src=${this.src} alt=${this.alt}>
                </div>
                <div class="cart__body">
                    <div class="cart__title">${this.title}</div>
                <div class="cart__text">${this.text}</div>
                <div class="cart-line"></div>
                <div class="cart__price">
                    <div class="cart__price-text">Цена:</div>
                    <div class="cart__price-price">${this.price} грн/день</div>
                </div>
                </div>
            </div>
            `;
      this.parent.append(element);


  }
}


// new MenuCard(
//   "img/vegy.jpg",
//   "net",
//   'Меню "Фитнес"',
//   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//   9,
//   '.zaglushka .zag-carts'
// ).render();

// new MenuCard(
//   "img/elite.jpg",
//   "net",
//   'Меню “Премиум”',
//   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//   14,
//   '.zaglushka .zag-carts'
// ).render();

// new MenuCard(
//   "img/post.jpg",
//   "net",
//   'Меню "Постное"',
//   'В меню “Премиум”  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed facere porro labore aspernatur quidem neque voluptatum, nemo nesciunt sit delectus. Deleniti, dignissimos debitis quas doloribus ipsum eius nesciunt nisi Voluptatum in vitae et! Quia molestiae veniam debitis maxime. Maiores quaerat omnis neque aliquam aut repellendus beatae atque, ratione soluta illo similique commodi id impedit nostrum quam reiciendis delectus enim!  Debitis a ipsa laboriosam incidunt, impedit possimus. Autem aspernatur voluptas eius ut quis, nostrum distinctio vel unde perspiciatis. Possimus voluptate, obcaecati nam ullam nostrum explicabo officiis magnam esse. Ab, consectetur.  Unde dolores, ex at magni nihil expedita nobis culpa fuga corporis sint dignissimos dolore officia doloremque eveniet ratione! Delectus aut vitae porro labore tempore molestiae fugit accusamus corrupti illum in. используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//   12,
//   '.zaglushka .zag-carts'
// ).render();