/*
    generate random serial number
*/


var mybutton = document.querySelector('button');
var mydiv = document.querySelector('div'); 

function generateSerialNum() {
    var allChars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var randomNum;  // اعرفو هنا بدل ما كل شوية اعرفو في اللوب و في اللوب بقي ابقي اديلو القيم اللي انا عاوزها
    var serial = '';    // مينفعش نعرف دي برة علشان لازم كل ما الفانكشن تشتغل اول حاجة تفضي و تمسح السيريال القديم و بعدين تعمل شغلها علشان متحطش السيريال القديم مع الجديد
    var serialLength = 20; // علشان نحدد السيريال هيبقي كام حرف او كام كراكتر
    var i;

    for (i = 0; i < serialLength; i++) { // علشان نحدد السيريال نامبر هيكون كام كراكتر
        randomNum = Math.floor(Math.random() * allChars.length);
        serial += allChars.substring(randomNum, randomNum + 1);
        //or //serial += allChars[randomNum];
        //or //serial += allChars.substr(randomNum, 1);
        //or //serial += allChars.slice(randomNum, randomNum + 1);
    }
    return serial;
}

mybutton.onclick = function() {
    mydiv.textContent = generateSerialNum();
}
