//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
//Human Readable Time
/*
const convertToStandart = (seconds) => `0${seconds}`

const humanReadable = (seconds) => {
    let hh = Math.trunc(seconds / 3600)
    seconds %= 3600
    let mm = Math.trunc(seconds / 60)
    let ss = Math.trunc(seconds %= 60)
    if(hh < 10) {
        hh = convertToStandart(hh)
    }
    if(mm < 10) {
        mm = convertToStandart(mm)
    }
    if(ss < 10) {
        ss = convertToStandart(ss)
    }
    return `${hh}:${mm}:${ss}`
}
*/