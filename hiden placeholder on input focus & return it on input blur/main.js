/*
    hiden placeholder on input focus & on input blur
*/


// الطريقة الاولي
// فانكشن بتقبل العنصر و تخلية لما اضغط علية فوكس يخفي البليس هولد و لما اعمل بلور ترجع البليس هولدر
function hidePlaceholder(element) {
    var packup = element.getAttribute('placeholder');

    element.onfocus = function() {
        this.setAttribute('placeholder', '');
    }

    element.onblur = function() {
        this.setAttribute('placeholder', packup);
    }
}

// و بكدا ممكن نطبق الفانكشن دي علي اي عنصر

// علشان تطبق الفانكشن دي علي الانبوت
hidePlaceholder(document.querySelector('input'));
// علشان تطبق الفانكشن دي علي التيكست اريا
hidePlaceholder(document.querySelector('textarea'));






//الطريقة الثانية
/*
//  يانك تخزن البليس هولدر في متغير قبل ما تبدا اي فانكشن
// var myInput = document.querySelector('form').querySelector('input');
var myInput = document.querySelector('input');
var packup = myInput.getAttribute('placeholder');

myInput.onfocus = function() {
    this.setAttribute('placeholder', '');
}

myInput.onblur = function() {
    this.setAttribute('placeholder', packup);
}
*/




// الطريقة الثالثة 
/*
// اني اخزن البليس هولدر في اتربيوت قبل ما امسحو
var myInput = document.querySelector('input');

myInput.onfocus = function() {
    this.setAttribute('puckup', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
}

myInput.onblur = function() {
    this.setAttribute('placeholder', this.getAttribute('puckup'));
    // this.setAttribute('puckup', '');
}
*/





// الطريقة الرابعة
/*
// ممكن استخدم الاف 
// مش عارف اعملها علشان مش عارف اقول لو العنصر دا الايفنت بتاعو كان اون فوكس
var myInput = document.querySelector('input');

if () {
    myInput.setAttribute('puckup', myInput.getAttribute('placeholder'));
    myInput.setAttribute('placeholder', '');    
} else {
    myInput.setAttribute('puckup', myInput.getAttribute('placeholder'));
    myInput.setAttribute('placeholder', myInput.getAttribute('puckup'));
    // this.setAttribute('puckup', '');    
}  
*/