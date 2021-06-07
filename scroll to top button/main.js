/*
    scroll to top button
*/

/*
// فانكشن بتطبعلك السكرول كل ما تعمل سكرول
window.onscroll = function() {
    console.log(pageYOffset);
    // or
    // console.log(scrollY);
}
*/


var myButton = document.getElementById('mybutton');

window.onscroll = function() {
    if (window.pageYOffset >= 2000) {
        myButton.style.display = 'block';  // or inline or inline block
    } else {
        myButton.style.display = 'none';
    }
}

myButton.onclick = function() {
    window.scrollTo(0, 0);
}
