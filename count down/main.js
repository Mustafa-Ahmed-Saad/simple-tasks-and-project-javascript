/*global console*/

var myMainDiv = document.getElementById('main-div');
var myStopButton = document.getElementById('stop');

function countDown() {
    
    'use strict';
    if (myMainDiv.textContent > 0) {
        
        myMainDiv.textContent = myMainDiv.textContent - 1;

    } else {
        myMainDiv.textContent = 10;
    }
}

var myIntervalTime = setInterval(countDown, 1000);

myStopButton.onclick = function () {
    
    'use strict';
    clearInterval(myIntervalTime);
};






var mySecondDiv = document.getElementById('second-div');
var myStopButton2 = document.getElementById('stop2'),
    myIntervalTime2;


function countDown2() {
    
    'use strict';
    if (mySecondDiv.textContent > 0) {
        
        mySecondDiv.textContent = mySecondDiv.textContent - 1;

    } else {
        mySecondDiv.textContent = "done";
        clearInterval(myIntervalTime2);
    }
}

var myIntervalTime2 = setInterval(countDown2, 1000);

myStopButton2.onclick = function () {
    
    'use strict';
    clearInterval(myIntervalTime2);
};





    