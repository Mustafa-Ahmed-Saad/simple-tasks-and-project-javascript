/*
    check if URL hash contains text
*/

// الطريقة الاولي
var myButton = document.querySelector('button');

myButton.onclick = function() {
    console.log('button click and chat opened')
}

// علشان تجيب الهاش و اللي بعدها و تشيل اول كاراكتر اللي هوا الهاش
if (window.location.hash.substring(1) === 'chat') { // هنا انا جبت الهاش اللي في اللوكيشن او اللي في اللينك اللي فوق و شلت منو بالسب سترنج اول حرف اللي هوا الشباك و قارنتو ب كلمة شات يعني لو اللي بعد الشباك بيساوي كلمة شات هتضفط علي الزرار اوتو ماتيك علشان يفتحلك الشات مثلا
    myButton.click();   // اكني رحت و ضغطت علي الزرار
} else {
    console.log('no');
}



// الطريقة الثانية
/*
// ممكن تستخدم السليس بدل السب سترنج 
var myButton = document.querySelector('button');

myButton.onclick = function() {
    console.log('button click and chat opened')
}

// علشان تجيب الهاش و اللي بعدها و تشيل اول كاراكتر اللي هوا الهاش
if (window.location.hash.slice(1) === 'chat') { // هنا انا جبت الهاش اللي في اللوكيشن او اللي في اللينك اللي فوق و شلت منو بالسب سترنج اول حرف اللي هوا الشباك و قارنتو ب كلمة شات يعني لو اللي بعد الشباك بيساوي كلمة شات هتضفط علي الزرار اوتو ماتيك علشان يفتحلك الشات مثلا
    myButton.click();   // اكني رحت و ضغطت علي الزرار
} else {
    console.log('no');
}
*/

// الطريقة الثالثة
/*
var myButton = document.querySelector('button');

myButton.onclick = function() {
    console.log('button click and chat opened')
}

// لو عاوز استخدم الاندكس و تجبلي رقم الاندكس بتاع الكلمة اللي ببحث عليها
if (window.location.hash.indexOf('chat') === 1) { // لو رقم الاندكس بتاع الكلمة اللي ببحث عنها بيساوي او في الاندكس واحد و مكتبتش صفر لان اللي في الاندكس صفر هو الهاش
    myButton.click();   // اكني رحت و ضغطت علي الزرار
} else {
    console.log('no');
}
*/