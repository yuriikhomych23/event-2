// let ball = document.querySelector('.ball');



// ball.onclick = function() {
//     console.log('click1')
// }


// ball.onclick = function() {
//     console.log('click2')    // спрацює ця функція
// }




// приймає два пареметри перший це подія другий параметр це функція 
// ball.addEventListener('click', function() {
//     console.log('click 1')
// })


// ball.addEventListener('click', function() {
//     console.log('click 2')
// })
// // тут спрацює дві функції і не впливає на попередню 


// keydown keyut keypress 3 події клавіатури 


// зухає мячиком по 10 пікселів 
// window.addEventListener('keydown', function (event) {
//     console.log(event.keyCode)
//     if (event.keyCode == 37) {
//         let goLeft = ball.offsetLeft;
//         if(goLeft > 0) {
//             ball.style.left = goLeft - 10 + 'px';
//         }
//         console.log(goLeft);
//     } else if (event.keyCode == 38) {
//         let goTop = ball.offsetTop;
//         if(goTop > 0) {
//             ball.style.top = goTop - 10 + 'px';
//         }
//     } else if (event.keyCode == 39) {
//         let goRight = ball.offsetLeft;
//         if(goRight < window.innerWidth - 110)
//         ball.style.left = goRight + 10 + 'px';
//     } else if (event.keyCode == 40) {
//         let goDown = ball.offsetTop;
//         if(goDown < window.innerHeight - 110)
//         ball.style.top = goDown + 10 + 'px';
//     } 
// });




// let getSel = x => document.querySelector(x);

// getSel('#add').addEventListener('click', function() {
//     getSel('.box').classList.add('red' , 'scale')
// })

// //add добавляє класи які ми вказали, декілька класів 


// getSel('#remove').addEventListener('click', function() {
//     getSel('.box').classList.remove('red', 'scale')
// })
// //remove видаляє ті класи які ми вказали


// getSel('#toggle').addEventListener('click', function() {
//     getSel('.box').classList.toggle('blue')
// })
// // toggle може працювати тільки з одни елементом і одним класом 




// let check = true;
// getSel('#toggle').addEventListener('click', function() {
//     if(check) {
//         getSel('.box').classList.add('red', 'scale')
//         check = false;
//     } else {
//         getSel('.box').classList.remove('red', 'scale');
//         check = true;
//     }
// });





// getSel('#toggle').addEventListener('click', function() {
//    let myClass = getSel('.box').className; // повертає всі класи у вигляді стрічки 
//    console.log(myClass);
// //    getSel('.box').className += ' red';
//    getSel('.box').id += 'red'; // classname використовує тільки коли потрібно взяти стрічку в інших випадках не варто
// })



// set add remove 
// getSel('#toggle').addEventListener('click', function() {
//     getSel('.box').setAttribute('class', 'box red') // приймає назву атрибуту і його значення і не дублює атрибут 
//     let atr = getSel('.box').getAttribute('class');
//     console.log(atr);
//     getSel('.box').removeAttribute('style') // приймає один параметр можемо видалити атрибут style
// })




// getSel('#toggle').addEventListener('click', function() {
//     let myElem = getComputedStyle(getSel('.box')).backgroundColor;
//     console.log(myElem);

// });