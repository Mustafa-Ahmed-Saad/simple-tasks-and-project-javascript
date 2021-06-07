var mybutton = document.getElementById('button');

mybutton.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // خلي بالك البريفينت ديفولت بتمنع حدوث الديفولت اللي هيحصل لما ادوس كليك او اعمل الايفنت دا فبتمنع الايفنت نفسو لكن مبتمنعش الكود اللي هيحصل بعدها او الكود اللي جوا الفانكشن اللي هيا فيها هيا بس مجرد بتمع الحدث لكن باقي الكود لا ملهاش علاقة بية
    console.log('fwe');
})

