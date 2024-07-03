let getSeconds = document.querySelector(".sec")
let getMilliseconds = document.querySelector(".mil")
let getMinutes = document.querySelector(".min")
let btnStart = document.querySelector(".btn-start")
let btnStop = document.querySelector(".btn-stop")
let btnReset = document.querySelector(".btn-reset")

let second = 00
let mins = 00
let tens = 00

let interval

btnStart.addEventListener('click',()=> {
    clearInterval(interval)
    interval = setInterval(startTimer,10)
})

btnStop.addEventListener('click',()=> {
    clearInterval(interval)
})

btnReset.addEventListener("click",()=> {
    clearInterval(interval)
    second=0
    tens=0
    mins-0
    getSeconds.innerHTML="0"+second
    getMilliseconds.innerHTML="0"+tens
    getMinutes.innerHTML="0"+mins
})

function startTimer(){
    tens++
    if(tens<=9){
        getMilliseconds.innerHTML="0"+tens
    }
    if(tens>9){
        getMilliseconds.innerHTML = tens
    }
    if(tens>99){
        second++
        getSeconds.innerHTML = "0"+second
        tens=0
        getMilliseconds.innerHTML = "0"+0
    }
    if(second>9){
        getSeconds.innerHTML=second
    }
    if(second>59){
        mins++
        getMinutes.innerHTML="0"+mins
        second=0
        getSeconds.innerHTML="0"+second
    }
    if(mins>9){
        getMinutes.innerHTML=mins
    }
}