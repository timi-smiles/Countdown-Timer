// countdown section

let Countdown = prompt("Pass in your countdown")
const countDown=()=>{
  let day = document.querySelector(".days h4")
  let hours = document.querySelector(".hours h4")
  let min = document.querySelector(".mins h4")
  let seconds = document.querySelector(".seconds h4")

  let currentDate =  new Date()
  // console.log(currentDate)
  let presentdate = new Date(Countdown)
  

  let millisecToXmax = presentdate - currentDate
  let dayRem = Math.floor(millisecToXmax / 3600 / 24 / 1000)
  let hoursRem = Math.floor(millisecToXmax / 3600 / 1000) % 24
  let secRem = Math.floor(millisecToXmax / 1000) % 60
  let minRem = Math.floor(millisecToXmax / 60000 ) % 60  
  // let secRem = Math.floor(millisecToXmax / 3600)
  // console.log(dayRem)
  // console.log(hoursRem)
  // console.log(secRem);

  day.innerHTML = dayRem
  hours.innerHTML = hoursRem
  seconds.innerHTML = secRem
  min.innerHTML = minRem

}
 
setInterval(countDown, 1000)