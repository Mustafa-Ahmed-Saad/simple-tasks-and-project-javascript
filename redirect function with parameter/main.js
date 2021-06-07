/*
    redirect function with parameter
*/

function redirectMe(url) {
    if (url !== '' && url.indexOf('http') == 0) { // شيك لو اليو ار ال  مش فاضي و في نفس الوقت بيبدا ب التش تي تي بي
        window.location.href = url;  // يفتحلك في نفس الصفحة اللي انت فيها
        // window.location = url;
        // window.open(url, '_blank');  // هتفتحهالك في صفحة جديدة و لو عاوز في نفس الصفحة عادي
    }
}

document.querySelector('button').onclick = function() {
    redirectMe('https://www.google.com');
}
// or 
// او نعمل في الاتش تي ام ال الحدث كالتالي
/* <button onclick = "redirectMe('https://www.google.com')" >redirect to url</button> */
