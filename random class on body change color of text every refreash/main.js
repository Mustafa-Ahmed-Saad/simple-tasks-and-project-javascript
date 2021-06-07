/*
    random class on body
*/



// or
// ممكن نجيب الكلاسات اللي هنتغل عليها من المحتوي اللي في الال اي
/*
var attOfLis = document.querySelectorAll('li');
var classArray = [];

for (li of attOfLis) {
    classArray.push(li.textContent);
}
*/

// or
// ممكن نجيب الكلاسات اللي هنحطها من الاتربيوت اللي في الال اي
/*
var attOfLis = document.querySelectorAll('li');
var classArray = [];

for (li of attOfLis) {
    classArray.push(li.getAttribute('att'));
}
*/

var classArray = ['class-one', 'class-two', 'class-three', 'class-four']
var randNumber = Math.floor(Math.random() * classArray.length); // هتديك رقم عشوائي من 0 ل 3 لانك لما تضرب رقم من 0.1 ل رقم 0.9 لمات تضربو في 3 اللو هوا عدد العناصر في الاراي اللي فيا الكلاسات هيديك رقم عشوائ من 0 ل 3 و مش هيطلع كسور لاني عامل فلور علشان يعمل راون لتحت


document.body.setAttribute('class', classArray[randNumber]);
// or
// document.body.classList.add(classArray.randNumber);

