/*
    clear input placeholder on focus
*/


// الطريقة الاولي
var myInput = document.querySelectorAll('form')[0].children[0];

myInput.onfocus = function() {
    if (this.hasAttribute("placeholder")) {
        this.removeAttribute('placeholder');
    }
}

myInput.onblur = function() {
    if (!this.hasAttribute('placeholder')) {
        this.setAttribute('placeholder', 'enter your name');
    }
}



// الطريقة الثانية
/*
var myInput = document.querySelectorAll('form')[0].children[0];

myInput.onfocus = function() {
    if (this.getAttribute('placeholder') === 'enter your name') {
        this.setAttribute('placeholder', '');
    }
}

myInput.onblur = function() {
    if (this.getAttribute('placeholder') === '') {
        this.setAttribute('placeholder', 'enter your name');
    }
}
*/



// الطريقة الثالثة
/*
var myInput = document.querySelectorAll('form')[0].children[0];

myInput.onfocus = function() {
    if (this.placeholder === 'enter your name') {
        this.placeholder = '';
    }
}

myInput.onblur = function() {
    if (this.placeholder === '') {
        this.placeholder = 'enter your name';
    }
}
*/


// الطريقة الرابعة
/*
// اني استخدم الريموف اتربيوت
var ourInput = document.querySelectorAll('form')[0].children[0];
ourInput.onfocus = function () {
    'use strict';
    this.removeAttribute('placeholder');
};
ourInput.onblur = function () {
    'use strict';
    this.setAttribute('placeholder', 'enter your name');
};
*/