// create a variable that brings the minutes'stick in a function

let minStick = document.querySelector('.min-stick')
    
let secStick = document.querySelector('.sec-stick')

let hourStick = document.querySelector('.hour-stick')

// first create a function to set the date

function setDate(){
    //update house to the real hours
    let hours = new Date();

    // get into hours variable to navigate seconds
    let seconds = hours.getSeconds();
    // make a sec stick revolve clockwise depending on degres
    let secDeg = ((seconds/60)*360)+90;
    // style the sec stick to rotate according to the #secDEg variable details
    secStick.style.transform = `rotate(${secDeg}deg)`





    let minutes = hours.getMinutes();
    // make a min-stick revolve clockwise depending on degres
    let minDeg = ((minutes/60)*360)+90;
     
    // style the min-stick to rotate according to the #secDEg variable details
    minStick.style.transform = `rotate(${minDeg}deg)`


    
    let hour = hours.getHours();
    // make a hour-stick revolve clockwise depending on degres
    let hrDeg = ((hour/60)*360)+90;
     
    // style the hourstick to rotate according to the #secDEg variable details
    hourStick.style.transform = `rotate(${hrDeg}deg)`

    
}
// make you function to reapeat after one sec which is = 1000
setInterval(setDate,1000)
