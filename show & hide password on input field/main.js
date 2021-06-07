/*
    hiden / show passord on input feild
*/


// الطريقة الاولي
/*
// و هي انك تعمل زرار و الزرار دا بيخفي و يظهر لباسورد و الزرار نفسو مش بيتغير الكتابة اللي فية
var myButton = document.getElementById('mybutton');
var myInput = document.getElementById('myinput');

myButton.onclick = function(kk) {
    kk.preventDefault()  // لازم توقف الايفنت دا علشان لو مش عملت كدا هيبعت الحاجة اللي في الحقل دا للثفحة اللي بعد كدا لان الزرار جوا الفورم مش براها
    if (myInput.getAttribute('type') == 'text') {
        myInput.setAttribute('type', 'password')
    } else {
        myInput.setAttribute('type', 'text')
    }
}
*/




// الطريقة الثانية
// و هي انك تعمل زرار و الزرار دا بيخفي و يظهر لباسورد و الزرار نفسو بيتغير الكتابة اللي فية
var myButton = document.getElementById('mybutton');
var myInput = document.getElementById('myinput');

myButton.onclick = function(kk) {
    kk.preventDefault();
    if (this.textContent === 'show') {
        myInput.setAttribute('type', 'text')
        this.textContent = 'hide';
    } else {
        myInput.setAttribute('type', 'password');
        this.textContent = 'show';
    }
}
