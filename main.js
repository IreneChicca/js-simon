// Recupero elementi di interesse

const hour = document.getElementById('hours')
const mins = document.getElementById('minutes')
const sec = document.getElementById('seconds')

const todayDate = new Date();

const tomorrowDate = new Date("2023-08-24 9:30");

const timeDiff = Math.floor(tomorrowDate-todayDate).valueOf()
console.log(timeDiff)

let secDiff = parseInt((timeDiff/1000)%60)
let minDiff = parseInt((timeDiff/(1000*60)%60))
let hourDiff = parseInt((timeDiff/(1000*60*60))%24)

console.log(hourDiff+":"+minDiff+":"+secDiff)


hour.innerHTML = hourDiff;
minutes.innerHTML = minDiff;
sec.innerHTML = secDiff;

