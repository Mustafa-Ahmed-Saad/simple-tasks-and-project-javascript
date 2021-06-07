/*
    type writer effect on text
*/

var myP = document.getElementById('myp');
var mytext = myP.getAttribute('mytext'); // هاخد التيكست اللي هيتحط في البراجراف و هيتكتب من الاتربيوت اللي انا عملتها
var mybutton = document.getElementById('button');

mybutton.onclick = function () {
   document.querySelector('.div-click-agin').textContent = '';

   document.body.style.pointerEvents = 'none';
   setTimeout(() => {
      document.body.style.pointerEvents = '';
   }, 4000);

   myP.textContent = '';
   let i = 0; // متعرفش الاي برة علشان لو عملت كدا لما الجملة تخلص و تدوس علي الزار علشان يكتبلك الكلمة تاني مش هيكتبها و هيديك انديفيند لان الاي بقت اكتر و اكبر من اللينث بتاع التيكست فمش في حروف يحطها لكن لو عرفت الاي هنا كل لما تضغط علي الزرار هيخليلك الاي ب صفر و كل شوية يزودها لغاية ما يكتبلك الملة كلها
   let mySetInterval = setInterval(function () {
      // حطيت السيت انتيرفال في فاريابول علشان ابقي اعرف اعملو كلير
      myP.textContent += mytext[i]; // علشان يزود علي الكونتيت الحالي الحرف اللي علية الدور
      i++;

      if (i >= mytext.length) {
         clearInterval(mySetInterval); // علشان نوقف السيت انتيرفال اللي عملناه
      }
   }, 200);

   // لو حطيت الاف هنا اولا هتتنفز قبل السيت انتيرفال لان السيت انتيرفال هيتنفز من البراوزر و بعدين يعمل كول باك و بعدين الكول باك دا يتحط في الستاك بعد ما الستاك يخلص كل اللي و كمان لو طيت الاف هنا تاني حاجة هيا هتتنفز مرة واحدة فقط و كملن لبمرة دي قبل ما السيت انتيرفال تشتغل اصلا
   setTimeout(() => {
      document.querySelector('.div-click-agin').textContent = 'check again to write';
   }, 4000);
};

// لو عاوز اخليها تشتغل علي طول من غير ما ادوس علي الزرار او اعمل حاجة هخرج الكود دا برا الفانكشن اللي بتحصل لما بدوس اون كليك و اشيل ايفنت الاون كليك و الفانكشن بتعتو و بس كدا
