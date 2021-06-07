/*
    calculate textarea chars with oninput
*/

var count = document.getElementById('count');
var textarea = document.getElementById('text');
var maxLength = textarea.getAttribute('maxlength');

textarea.oninput = function () { //or // onkeyup
    // or
    // count.innerHTML = maxLength - this.value.length
    count.textContent = maxLength - this.value.length;

    if (count.textContent == 0) {
        count.classList.add('red');
    } else {
        count.classList.remove('red')
    }
    // or ممكن تستخدم دالة اف المختصرة
    // count.textContent == 0 ? count.classList.add('red') : count.classList.remove('red')
};



// or
/*
// use $
// و كدا بيعمل كاشينج للمتغيرات لما بيحط قبلها $
// طيب السوال انو بيعمل كاشينج لية و انا لو معملتش كاشينج اية اللي هيحصل
var $count = document.getElementById('count');
var $textarea = document.getElementById('text');
var $maxLength = $textarea.getAttribute('maxlength');

$textarea.oninput = function () {
    count.textContent = $maxLength - this.value.length
}
*/