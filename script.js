// import { tns } from "./node_modules/tiny-slider/src/tiny-slider" 







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
const btnStop = document.querySelector('.stop-time');
const littleBlock = document.querySelector('.little-block');
const bigBlock = document.querySelector('.big-block');
let timeId;

let posX = 10;
let posY = 10;
let xSpeed = 2;
let ySpeed = 2;


function upadate() {
  littleBlock.style.left = posX + 'px';
  littleBlock.style.top = posY + 'px';
}

btnStart.addEventListener('click', () => {
  let divan = setInterval(() => {
    if (posX + littleBlock.clientWidth >= bigBlock.clientWidth || posX < 0) {
      xSpeed = -xSpeed;
      setRandomColor(littleBlock);
    }
    if (posY + littleBlock.clientHeight >= bigBlock.clientHeight || posY < 0) {
      ySpeed = -ySpeed;
      setRandomColor(littleBlock);
    }
    posX += xSpeed;
    posY += ySpeed;
    upadate();
    btnStop.addEventListener('click', () => {
      clearInterval(divan);

    })


  }, 1000 / 60);
})



function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(block) {
  block.style.backgroundColor = getRandomColor();
}
// setRandomColor(littleBlock);
// littleBlock.style.backgroundColor = 'red';
// btnStart.addEventListener('click', ()=> {

// })
// function myAnimation() {
//   const elem = document.querySelector('.little-block');
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 320) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + 'px';
//     }
//   }
// }
// function myAnimation() {

//   posX++;
//   posY++;
//   elem1.style.top = posY + "px";
//   elem1.style.left = posX + 'px';


//   if (posY < 320 && posX < 320){
//     requestAnimationFrame(myAnimation);
//   } 
//  }



// btnStart.addEventListener('click', () => {

//   requestAnimationFrame(myAnimation);
// });




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
// console.log(getRandomInt(0,2));

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
            
            `;
    element.classList.add('zag-cart');
    this.parent.append(element);



  }
}


new MenuCard(
  "img/vegy.jpg",
  "net",
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  9,
  '.zag-carts'
).render();

new MenuCard(
  "img/elite.jpg",
  "net",
  'Меню “Премиум”',
  'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  14,
  '.zag-carts'
).render();

new MenuCard(
  "img/post.jpg",
  "net",
  'Меню "Постное"',
  'В меню “Премиум”  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed facere porro labore aspernatur quidem neque voluptatum, nemo nesciunt sit delectus. Deleniti, dignissimos debitis quas doloribus ipsum eius nesciunt nisi Voluptatum in vitae et! Quia molestiae veniam debitis maxime. Maiores quaerat omnis neque aliquam aut repellendus beatae atque, ratione soluta illo similique commodi id impedit nostrum quam reiciendis delectus enim!  Debitis a ipsa laboriosam incidunt, impedit possimus. Autem aspernatur voluptas eius ut quis, nostrum distinctio vel unde perspiciatis. Possimus voluptate, obcaecati nam ullam nostrum explicabo officiis magnam esse. Ab, consectetur.  Unde dolores, ex at magni nihil expedita nobis culpa fuga corporis sint dignissimos dolore officia doloremque eveniet ratione! Delectus aut vitae porro labore tempore molestiae fugit accusamus corrupti illum in. используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  12,
  '.zag-carts'
).render();

//============================================================

const inputRub = document.querySelector('#rub'),
  inputUsd = document.querySelector('#usd');



inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      // console.log(request.response);
      console.log(request.response);
      const data = JSON.parse(request.response);
      console.log(data.current);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);

      // console.log(data);
    } else {
      inputUsd.value = "что то пошло не так";
    }
  })
});

inputUsd.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      // console.log(request.response);
      const data = JSON.parse(request.response);
      inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);

      // console.log(data);
    } else {
      inputRub.value = "что то пошло не так";
    }
  })
});


//modal==================================================================


const modalBtn = document.querySelectorAll('[data-modal]'),
  modalWindow = document.querySelector('.modal-block');


function openModal() {
  modalWindow.classList.add('show', 'fade');
  modalWindow.classList.remove('hide', 'fade');
  document.body.classList.add('body-block');

};

modalBtn.forEach(item => {
  item.addEventListener('click', openModal)
});


function closeModal() {
  modalWindow.classList.add('hide', 'fade');
  modalWindow.classList.remove('show', 'fade');
  document.body.classList.remove('body-block');
};


modalWindow.addEventListener('click', (e) => {

  if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {

    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modalWindow.classList.contains('show')) {
    closeModal();
  }
});

//show picture with animation=====================================

const pictureBtn = document.querySelector('.push-button'),
  picture = document.querySelector('.picture-block-img');



pictureBtn.addEventListener('click', (e) => {
  e.preventDefault();
  picture.classList.toggle('classOpacityOn');
});


//form send========================================================

const modalForm = document.querySelector('.modal');

postData(modalForm);

function postData(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();


    const r = new XMLHttpRequest();
    r.open('POST', 'server.php');

    r.setRequestHeader('Content-type', 'application/json');
    const formData = new FormData(form);

    const object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    r.send(json);

    r.addEventListener('load', () => {
      if (r.status === 200) {
        console.log(r.response);

        form.reset();
        thanksModal();

      } else {
        console.log('error');
      }
    });

  })
};



function thanksModal() {
  modalForm.classList.add('hide');
  const element = document.createElement('div');
  element.innerHTML = `<div class="thanksModal"><h2>Спасибо большое мы свяжемся с вами в ближайшее время!</h2></div>`;
  modalForm.parentElement.append(element);
  setTimeout(() => {
    element.remove();
    modalForm.classList.remove('hide');

    closeModal();
  }, 2000);

};


//slider==========================================================
const slides = document.querySelectorAll('.slide'),
  slidesField = document.querySelector('.sliders-img-inner'),
  prev = document.querySelector('.sliders-navigation__prev'),
  slidesWrapper = document.querySelector('.sliders-img'),
  totel = document.querySelector('#all-slides'),
  current = document.querySelector('#current'),
  next = document.querySelector('.sliders-navigation__next'),
  width = window.getComputedStyle(slidesWrapper).width,
  dotts = document.querySelector('.sliders-dotts');


slidesField.style.width = 100 * slides.length + '%';
let slideIndex = 1;
let offset = 0;




if (slides.length < 10) {
  totel.textContent = `0${slides.length}`;
  current.textContent = `0${slideIndex}`;
} else {
  totel.textContent = slides.length;
  current.textContent = slideIndex;
};


const dots = [];
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('li');
  dot.setAttribute('data-slide-to', i + 1);
  dot.classList.add('dot');
  if (i == 0) {
    dot.style.opacity = 1;
  }

  dotts.append(dot);
  dots.push(dot);
}




next.addEventListener('click', (e) => {
  if (offset == width.replace(/\D/g, '') * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.replace(/\D/g, '');
  }
  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`
  } else {
    current.textContent = slideIndex;
  }

  dots.forEach(dot => dot.style.opacity = '0.2');
  dots[slideIndex - 1].style.opacity = 1;




})


prev.addEventListener('click', (e) => {
  if (offset == 0) {

    offset = +width.replace(/\D/g, '') * (slides.length - 1);
  } else {
    offset -= +width.replace(/\D/g, '');
  }
  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`
  } else {
    current.textContent = slideIndex;
  }
  dots.forEach(dot => dot.style.opacity = '0.2');
  dots[slideIndex - 1].style.opacity = 1;


})


dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const slideTo = e.target.getAttribute('data-slide-to');

    slideIndex = slideTo;
    offset = +width.slice(0, width.length - 2) * (slideTo - 1);

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '0.2');
    dots[slideIndex - 1].style.opacity = 1;
  })
})













//slider-end ==========================================================


// const element1 = document.createElement('div');
// element1.innerHTML = `<div class="thanksModal"><h2>Спасибо большое мы свяжемся с вами в ближайшее время!</h2></div>`;
// // modalForm.insertAdjacentElement('afterbegin', element);

// const newBlock = document.querySelector('.new-block');
// console.log(modalForm.parentElement);
// console.log(newBlock);
// console.log(element1);

// newBlock.append(element1);

// modalForm.parentElement.append(element1);
// modalForm.remove();



//=========================================================================
//fiter
// const names = ['iven', 'ann', 'helens', 'zalupnii'];

// const newName = names.filter((item) => item.lenght < 5);
// console.log(newName);


// //map

// const answers2 = ['ANna', 'BiLbb', 'FFttRR'];
// const marAnswers = answers2.map(item => item.toLowerCase());
// console.log(marAnswers);

// //every/some


// const rrr = [4, 'truy', 7, 'fhfgh', true];
// console.log(rrr.some(item => typeof(item) === 'number'));
// console.log(rrr.every(item => typeof(item) === 'number'));

// //reduce складывает массив, иожно числа и строки

// const rur = [4, 5, 1, 3, 2, 6];
// const res =  rur.reduce((sum, current) => sum + current);
// console.log(res);

// //====
// const obj = {
//   ivan: "persone",
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);


// const films = [
//   {
//       name: 'Titanic',
//       rating: 9
//   },
//   {
//       name: 'Die hard 5',
//       rating: 5
//   },
//   {
//       name: 'Matrix',
//       rating: 8
//   },
//   {
//       name: 'Some bad film',
//       rating: 4
//   }
// ];



// function showGoodFilms(arr) {
//   return arr.filter(item => item.rating >= 8);

// }
// showGoodFilms(films);
// //================
// //====
// function showListOfFilms(arr) {
//   let t = [];
//   arr.forEach(function(item, i) {
//   t[i] = item.name;

// })
// return t.reduce((sum, current) => sum + ', ' + current);
// };
// // console.log(showListOfFilms(films));


// //====
// function setFilmsIds(arr) {
//   arr.forEach(function(item,i) {
//     item.id = i;
//     i++;
//   })
//   return arr;
// }
// console.log(setFilmsIds(films));








// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//   return arr.every(item => item.id !== undefined);
// }


// // console.log(checkFilms(tranformedArray));



// // console.log(rrr.every(item => typeof(item) === 'number'));



// const funds = [
//   {amount: -1400},
//   {amount: 2400},
//   {amount: -1000},
//   {amount: 500},
//   {amount: 10400},
//   {amount: -11400}
// ];




// // const getPositiveIncomeAmount = (data) => {
// //   let sum = 0;
// //   data.forEach(function(item) {

// //   if (item.amount > 0){
// //     sum += item.amount;
// //   } 
// // }) 
// // return sum;

// // };

// funds.filter(item => item.amount > 0).reduce((acc, current) => acc + current, 0);
// console.log(funds.filter(item => item.amount > 0).reduce((acc, current) => acc + current.amount, 0));




// let newArrr = funds.map(item => item.amount);


// // console.log(newArrr.reduce((sum, current) => sum + current));
// // console.log(funds.map(item => item.amount).reduce((sum, current) => sum + current));



// const getTotalIncomeAmount = (data) => {
//   if (funds.map(item => item.amount > 0)) {
//     return funds.map(item => item.amount).reduce((sum, current) => sum + current);
//   }else {
//     return getPositiveIncomeAmount(data);
//   }

// };


//regular======================
// \d ищем цыфры 
// \w ищем буквы
// \s  ищем пробелы
// \W ищем не буквы
// \D ищем не цыфры
// i  флаг не влияет регистр
// g  флаг ищем глобально а не первое
// m флаг включает многострочный режим

//методы match

// const ans = prompt('введите ваше имя'); 

// const reg = /n/ig; //создали регулярное выражение, оно ищет n глобюально, без учета регистра

// console.log(ans.match(reg));

//   /\d/g; это будет искать только цыфры во всем введенном



// const msg = 'My number +12345678, name: Oleg';

// function transformMsg(str) {

//     // let a = str.replace(/\+\d{8}/, "******")
//     let b = str.slice(10, 19).replace('+12345678', '******')
//   return b;
//     // return b;
// }

// transformMsg(msg);



// const msg = 'My number +12345678, name: Oleg';

// let a = msg.replace(/\+\d{8}/, "******");

// console.log(a);






// let b = msg.slice(10, 19).replace('+12345678', '******');
// b+= msg.slice(-4).replace('Oleg', "hidden");
// console.log(b);







// lightGallery(document.getElementById('lightgallery'), {
//     plugins: [lgZoom, lgThumbnail],
//     speed: 500,


// });


//=====================drag & drop=========

 const boxesBlocks = Array.from(document.querySelectorAll('.block-DD')),
    allColors = ['black', 'green', 'yellow', 'blue', 'red'],
    zoomBlockContainer = document.querySelector('.bodyDD-zoom-container'),
    blockDD = document.querySelectorAll('.block-DD'),
    blocksClassescontains = document.querySelector('.bodyDD_blocks');



  for (i=0; i < allColors.length; i++){
    createBloccks(i);
  }


    function createBloccks(i) {
      let newBlock = document.createElement('div');
      newBlock.classList.add('bodyDD_zoom');
      newBlock.setAttribute("draggable","true");
      newBlock.classList.add(allColors[i]);
      zoomBlockContainer.append(newBlock);
    }


function countClasses(){
  blockDD.forEach(elem =>{
    let opp = 0
   if (elem.classList.contains('block-DD-hover')){
    opp +=1;
   }
   console.log(opp);
  })


}






    let colorNow;
    let y;
    const zoomBlock = document.querySelectorAll('.bodyDD_zoom');


//====

zoomBlock.forEach((item, j) =>{
    
      

  // Обработчик начала перетаскивания элемента
  item.addEventListener("dragstart", (e)=>{
    colorNow = item.classList[1];
    dragstart(e);
    // console.log(colorNow, 'moving now'); 
    // console.log(j);
    y = j
  });

  // Обработчик завершения перетаскивания элемента
  item.addEventListener("dragend", dragend);

  // подхватывая маленький блок он исчезает
  function dragstart(e) {
    setTimeout(() => e.target.classList.add("bodyDD_zoom-opacity"), 0);

  }

  // Функция завершения перетаскивания элемента, при возвращении малннького блока обекта он снова становиться видимым
  function dragend(e) {
    e.target.classList.remove("bodyDD_zoom-opacity");

    if (zoomBlockContainer.children.length <= 0 ){
      zoomBlockContainer.textContent = 'you Win!!!';
    }
    

    
  }



  boxesBlocks.forEach((box, i) => {

    // Когда заходим элементом в бокс
    box.addEventListener("dragover", (e) =>{
      e.preventDefault();

    });
    // Когда отпускаем элемент на нужном боксе
    box.addEventListener("drop", (e)=>{

      // console.log(y);
      e.target.append(zoomBlock[y]); 
     

      
    } );
    // Когда достигаем бокс
    box.addEventListener("dragenter", function(e){
      // console.log(i);
     if (boxesBlocks[i].classList[1] === colorNow){

      e.target.classList.add("block-DD-hover");
     }
    });
    // Когда покидаем бокс
    box.addEventListener("dragleave", (e)=>{
      
      e.target.classList.remove("block-DD-hover");
    } );

//=====




  });

  zoomBlockContainer.addEventListener("drop", (e)=>{ 
  
    e.target.append(zoomBlock[y]); 
  } );
  zoomBlockContainer.addEventListener("dragover", (e)=>{
    e.preventDefault();
  });

  // Когда достигаем бокс
  zoomBlockContainer.addEventListener("dragenter", (e) =>{
    // console.log('privet');
  });




    // function dragenter(e, i) {
    //   // console.log(i, 'prishel');

    //   // if (item.classList.contains(colorNow) && boxesBlocks[i].classList.contains(colorNow)){
    //   //   e.target.classList.add("block-DD-hover");
        
    //   // } else{
      
    //   // }
    //   // e.target.classList.add("block-DD-hover");
    //   // Добавляем желтую подсветку
    //   // e.target.classList.add("block-DD-hover");
    // }

    // function dragleave(e,i) {
    //   // Убираем желтую подсветку
    //   // console.log(i, 'ushel');
    //   e.target.classList.remove("block-DD-hover");
    // }








  



      })


      //====================

      const upLoad = document.querySelector('#fileElem'),
       uploadGallery = document.querySelector('.upload-gallery');

      // console.log(upLoad);


      upLoad.addEventListener('input', function(){
        
        let newImg = document.createElement('img');
        
        let reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
      

        reader.onload = function() {
          let new_file_input = `
          <div class="upload-gallery__container">
                        <img class="upload-gallery__container-img" src="${reader.result}" alt="">
                        <span class="upload-gallery__container-text">name picture</span>
                        <a href="#" onclick="removeFilesItem(this); return false;" class="upload-gallery__container-close">x</a>
                    </div>`;


            // newImg.src = reader.result
       
            uploadGallery.innerHTML =new_file_input;
          };

      })








//============================

// let dropArea = document.getElementById('drop-area');



// ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, preventDefaults, false)
// })
// function preventDefaults (e) {
//   e.preventDefault()
//   e.stopPropagation()
// }

// ;['dragenter', 'dragover'].forEach(eventName => {
//   dropArea.addEventListener(eventName, highlight, false)
// })
// ;['dragleave', 'drop'].forEach(eventName => {
//   dropArea.addEventListener(eventName, unhighlight, false)
// })
// function highlight(e) {
//   dropArea.classList.add('highlight')
// }
// function unhighlight(e) {
//   dropArea.classList.remove('highlight')
// }
          
   
// dropArea.addEventListener('drop', handleDrop, false)
// function handleDrop(e) {
//   let dt = e.dataTransfer
//   let files = dt.files
//   handleFiles(files)
// }
// function handleFiles(files) {
//   ([...files]).forEach(uploadFile)
// }
// function uploadFile(file) {
//   let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
//   let formData = new FormData()
//   formData.append('file', file)
//   fetch(url, {
//     method: 'POST',
//     body: formData
//   })
//   .then(() => { /* Готово. Информируем пользователя */ })
//   .catch(() => { /* Ошибка. Информируем пользователя */ })
// }

// function previewFile(file) {
//   let reader = new FileReader()
//   reader.readAsDataURL(file)
//   reader.onloadend = function() {
//     let img = document.createElement('img')
//     img.src = reader.result
//     document.getElementById('gallery').appendChild(img)
//   }
// }//=


// function handleFiles(files) {
//   files = [...files]
//   files.forEach(uploadFile)
//   files.forEach(previewFile)
// }
