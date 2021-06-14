var timer = document.getElementById("timer");

var sec = 0, min = 0, hours = 0;

var y = null;
var a = 0;

var displaySec = 0, displayMin = 0, displayHour = 0;


function stopWatch() {
    if (a === 0) {
        y = window.setInterval(startSec, 1000);

        function startSec() {
            sec++;
            
            if (sec/60 === 1) {
                sec = 0;
                min++;
                
                if(min/60 === 1){
                    min = 0;
                    hours++;
                }
            }
            
            if(sec<10){
                displaySec = '0' + sec.toString();
            } else{
                displaySec = sec;
            }
            
            if(min<10){
                displayMin = '0' + min.toString();
            } else{
                displayMin = min;
            }
            
            if(hours<10){
                displayHour = '0'+hours.toString();
            } else{
                displayHour = hours;
            }
            
            timer.innerText = displayHour +":" +displayMin + ":" + displaySec;
            
        }
        
        document.getElementById('startStop').innerText = "Stop";
            a = 1;//timer started
    }
    
    else{
        window.clearInterval(y);
        document.getElementById('startStop').innerText = "Start";
        a = 0;
    }
}

function reset() {
    window.clearInterval(y);
    sec=0;
    min=0;
    hours=0;
    timer.innerHTML = "00:00:00";
    document.getElementById('startStop').innerHTML = "Start";
}







