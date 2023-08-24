// Recupero elementi di interesse

const hour = document.getElementById('hours')
const mins = document.getElementById('minutes')
const sec = document.getElementById('seconds')

const todayDate = new Date();

const tomorrowDate = new Date("2023-08-24 9:30");

let timeDiff = Math.floor(tomorrowDate-todayDate).valueOf()
console.log(timeDiff)


function StopCount() {
    clearInterval(count)
}



const count = setInterval(function(){
 if (timeDiff < 0)
    {
        timeDiff = 1;
        StopCount()
    }

    timeDiff = timeDiff - 1000;
    let secDiff = parseInt((timeDiff/1000)%60)
    let minDiff = parseInt((timeDiff/(1000*60)%60))
    let hourDiff = parseInt((timeDiff/(1000*60*60))%24)

    hour.innerHTML = hourDiff;
    mins.innerHTML = minDiff;
    sec.innerHTML = secDiff;
    

    
   

},1000);



