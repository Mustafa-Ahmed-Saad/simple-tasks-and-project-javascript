/*
    show random image every x second
*/


/*
var myImage = document.querySelector('img');
var imagesArray = ['photo/th.jfif', 'photo/th(1).jfif', 'photo/th(4).jfif', 'photo/th(5).jfif']

setInterval(function() {
    let randNum = Math.floor(Math.random() * imagesArray.length);
    myImage.setAttribute('src', imagesArray[randNum]);
}, 3000)
*/



// لو عاوز تعملها عن طريق الكلاس علشان الخلفي تبقي مظبطة و كل حاجة فيها تمام
var mybody = document.querySelector('body');
var imagesArray = ['img1', 'img2', 'img3', 'img4']

setInterval(function() {
    let randNum = Math.floor(Math.random() * imagesArray.length);
    mybody.setAttribute('class', imagesArray[randNum]);
}, 4000)
