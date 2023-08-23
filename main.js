const todayDate = new Date();
console.log(todayDate)

let todayMillis = todayDate.getMilliseconds()


let todaySec = todayDate.getSeconds()


let todayMin = todayDate.getMinutes()

let todayHour = todayDate.getHours()

console.log(todayHour+":"+todayMin+":"+todaySec+":"+todayMillis)


const tomorrowDate = new Date("2023-08-24 9:30");
console.log(tomorrowDate)

let tomorrowMillis = tomorrowDate.getMilliseconds()


let tomorrowSec = tomorrowDate.getSeconds()


let tomorrowMin = tomorrowDate.getMinutes()

let tomorrowHour = tomorrowDate.getHours()

console.log(tomorrowHour+":"+tomorrowMin+":"+tomorrowSec+":"+tomorrowMillis)



console.log((tomorrowHour-todayHour)+":"+(tomorrowMin-todayMin)+":"+(tomorrowSec-todaySec))

const timeDiff = Math.floor(tomorrowDate-todayDate).valueOf()
console.log(timeDiff)






