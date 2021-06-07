/*
    change colors with localStorage
*/

//add defult local storage class on bady
document.body.classList.add(localStorage.getItem('keycolor') || 'red');
document.body.classList.add(localStorage.getItem('keyfont') || 'cursive');

var arrayOfLis = document.querySelectorAll('.color-switcher li'); // جبنا كل ال ال اي اللي في اليو ال اللي واخدة كلاس كولور سويتش في اراي
var classesArray = [];

// loop on lis
for (let i = 0; i < arrayOfLis.length; i++) {
   // get classes List
   // push attribute of li in classesArray
   classesArray.push(arrayOfLis[i].getAttribute('d-color'));
   classesArray.push(arrayOfLis[i].getAttribute('f-family'));
   arrayOfLis[i].addEventListener(
      'click',
      function () {
         document.body.classList.remove(...classesArray); // لازم افرد القيقيم اللي هنحزفها او الكلاسات اللي هنحزفها من الاراي لاني لو حطتلو الاراي كلها علي بعض مش  هوا مش بيقبل الاراي كدا //    لازم نمسح الكلاسات اللي في البادي لو موجودة علشان مش يضيف كلاس علي كلاس قدريم
         document.body.classList.add(this.getAttribute('d-color'));
         document.body.classList.add(this.getAttribute('f-family'));

         // add data to local storage to save shanged
         localStorage.setItem('keycolor', this.getAttribute('d-color'));
         localStorage.setItem('keyfont', this.getAttribute('f-family'));
      },
      false
   );
}

// console.log(classesArray);    // ["red", "green", "purple", "black"]

console.log(localStorage.getItem('keycolor'));
console.log(localStorage.getItem('keyfont'));

/*
// localStorage method
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
*/
