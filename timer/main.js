/*
    countdawn using seconds
*/



// الطريقة الاولي
var seconds = 75; // اوعا تدخل دي جوا الفانكشن لانك لو عملت كدا كل لما ينقص واحد و يرجع يعمل الفانكشن تانيي هيروح معين ال ثواني ب 75 ثاني بعد ما نقص منها واحد و بعدين ينقص منها تاني فتبقي 74 يرجع يعمل الفانكشن من اول و جديد يلاقي دي جوا الفانكشن فيخلي الثوانني بدل ما هيا 74 يرجعها تاني 75
var myDiv = document.getElementById('countdawn');

function countdawn() {
    let munites = Math.floor(seconds / 60);
    let realSeconds = seconds % 60;

    if (munites < 10) {
        munites = '0' + munites
    }

    if (realSeconds < 10) {
        realSeconds = '0' + realSeconds
    }

    myDiv.textContent = munites + ' : ' + realSeconds

    if (seconds === 0) { // or // (munites == 0 && seconds == 0)
        clearInterval(myInterval);
        myDiv.textContent = 'done'
    } else {
        seconds = seconds - 1
    }
}

var myInterval = setInterval(function() {
    countdawn();
}, 1000);
// or
// var myInterval = setInterval(countdawn, 1000);





/*
// الطريقة الثانية
var seconds = 75;
var countDiv = document.getElementById('countdawn');

function secondPass() {
    let minutes = Math.floor(seconds / 60);
    let realSeconds = seconds % 60;

    if (realSeconds < 10) {
        realSeconds = '0' + realSeconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    countDiv.textContent = minutes + ' : ' + realSeconds;

    if (seconds > 0) {
        seconds = seconds - 1
    } else {
        clearInterval(mycount);
        countDiv.textContent = 'done';
    }

}

var mycount = setInterval(function() {
    secondPass();
}, 1000);
// or
// var myInterval = setInterval(countdawn, 1000);
*/
