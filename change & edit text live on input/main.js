/*
    change / edit text live on input
*/


var myInput = document.querySelectorAll('form')[0].querySelector('input');
var myTextarea = document.querySelectorAll('form')[0].querySelector('textarea');
var liveH2 = document.querySelector('h2');
var liveP = document.querySelector('p');



myInput.onkeyup = function() {
    liveH2.textContent = this.value;
    // dont do that liveH2.textContent = this.textContent
    // و دا لانك مبتشتخدمش التيكست كوننت غير للعنصر اللي بيتكتب بين قفلتو و فتحتو الكونتينت او الكام لكن العنصر اللي اليوزر بيكتب فية الكونتينت او اللي اليوزر بيكتب فية بنفسو فبتجيب الكلام دا عن طريق الفاليو و ليس التيكست كونتينت
}

myTextarea.onkeyup = function() {
    liveP.textContent = this.value;
    // dont do that liveP.textContent = this.textContent
    // و دا لانك مبتشتخدمش التيكست كوننت غير للعنصر اللي بيتكتب بين قفلتو و فتحتو الكونتينت او الكام لكن العنصر اللي اليوزر بيكتب فية الكونتينت او اللي اليوزر بيكتب فية بنفسو فبتجيب الكلام دا عن طريق الفاليو و ليس التيكست كونتينت
}

