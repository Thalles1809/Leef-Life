let hh = 00;
let mm = 00;
let ss = 00;
let tempo = 1000;
let cron;


function atalhosTimer() {

    this.tenMinutes = function () {
        clearInterval(cron);

        hh = 00;
        mm = 10;
        ss = 00;
        document.getElementById('counter').innerText = '00:10:00';
    
    }

    this.fiveMinutes = function () {
        clearInterval(cron);

        hh = 00;
        mm = 05;
        ss = 00;
        document.getElementById('counter').innerText = '00:05:00';

    }

    this.fifTeenMinutes = function () {
        clearInterval(cron);

        hh = 00;
        mm = 15;
        ss = 00;
        document.getElementById('counter').innerText = '00:15:00';

    }

    this.twentyMinutes = function () {
        clearInterval(cron);

        hh = 00;
        mm = 20;
        ss = 00;
        document.getElementById('counter').innerText = '00:20:00';

    }
}



function start() {

    $('#counter').css("color", "greenyellow").delay(1500);

        cron = setInterval(() => { timer(); }, tempo);
        return false
        
    
}

let atalho = new atalhosTimer

function pause() {

    clearInterval(cron);
    return false
}

function stop() {

    clearInterval(cron);
    hh = 00;
    mm = 00;
    ss = 00;
    document.getElementById('counter').innerText = '00:00:00';
}


function timer() {

    ss--;

    if (ss == -01) {
        ss = 59;
        mm--;

        if (mm == -01) {
            mm = 59;
            hh--;

            if (hh == -01) {
                $('#counter').css("color", "red").delay(800);
                clearInterval(cron);
                hh = 00;
                mm = 00;
                ss = 00;

                let audio = new Audio('../sounds/sino.mp3');
                audio.volume = 0.2;
                audio.play()
                setTimeout(myFunction, 5000)

                function myFunction() {
                    audio.loop = false;
                    audio.pause()
                }
            }
        }
    }








    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;

}