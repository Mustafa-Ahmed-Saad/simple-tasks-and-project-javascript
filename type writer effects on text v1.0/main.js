/*
    type writer effect on text
*/

// لو النص مكتوب من الاول فهبدا اني امسحو لاول

var myP = document.getElementById('myp');
var mytext = myP.getAttribute('mytext'); // هاخد التيكست اللي هيتحط في البراجراف و هيتكتب من الاتربيوت اللي انا عملتها

setInterval(() => {
   let j = mytext.length;
   let secondsetinterval = setInterval(() => {
      myP.textContent = myP.textContent.slice(0, myP.textContent.length - 1);
      j--;

      if (j == 0) {
         clearInterval(secondsetinterval);
         myP.textContent = '';
         let i = 0; // متعرفش الاي برة علشان لو عملت كدا لما الجملة تخلص و تدوس علي الزار علشان يكتبلك الكلمة تاني مش هيكتبها و هيديك انديفيند لان الاي بقت اكتر و اكبر من اللينث بتاع التيكست فمش في حروف يحطها لكن لو عرفت الاي هنا كل لما تضغط علي الزرار هيخليلك الاي ب صفر و كل شوية يزودها لغاية ما يكتبلك الملة كلها
         let mySetInterval = setInterval(function () {
            // حطيت السيت انتيرفال في فاريابول علشان ابقي اعرف اعملو كلير
            myP.textContent += mytext[i]; // علشان يزود علي الكونتيت الحالي الحرف اللي علية الدور
            i++;

            if (i >= mytext.length) {
               clearInterval(mySetInterval); // علشان نوقف السيت انتيرفال اللي عملناه
            }
         }, 250);
      }
   }, 250);
}, 10000);
