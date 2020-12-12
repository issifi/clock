const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
// analog clock selecter
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let clockTipe = 'analog'
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes()
    const hours = now.getHours();
    // analog clock 
    const secondDeg = ((seconds/60)*360)+90;
    const minsDeg = ((mins/60)*360)+((seconds/60)*6)+90;
    const hourDeg = ((hours/12)*360)+((mins/60)*30)+90
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    // digital clock
    if(seconds < 10){
        second.innerHTML = `0${seconds}`;
    }
    else{
        second.innerHTML = seconds;
    }
    
    if(mins < 10){
        minute.innerHTML = `0${mins}:`;
    }
    else{
        minute.innerHTML = `${mins}:`;
    }
    if(hours < 10){
        hour.innerHTML = `0${hours}:`;
    }else{
        hour.innerHTML = `${hours}:`;
    }
    
}
setInterval(setDate, 1000);
setDate();

// clock mode
const analog = document.querySelector('.analog-container');
const numeric = document.querySelector('.numeric-container') 
const clockSwitch = document.querySelector('#clockMode')
function clockMode(e) {
    if(e.target.checked){
        clockTipe = 'numeric'
        analog.style.display = 'none';
        numeric.style.display = 'flex';
    }else {
        clockTipe = 'analog'
        analog.style.display = 'block';
        numeric.style.display = 'none';
    }
}
clockSwitch.addEventListener('change',clockMode)
function checkClockMode(){
    if(clockSwitch.checked){
        clockTipe = 'numeric'
        analog.style.display = 'none';
        numeric.style.display = 'flex';
    }else {
        clockTipe = 'analog'
        analog.style.display = 'block';
        numeric.style.display = 'none';
    }
}
checkClockMode();

// darck mode

const toggleSwitch = document.querySelector('#theme');
const clock = document.querySelector('#clock-icon');
toggleSwitch.checked = false
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        clock.style.filter = 'invert(0.7)';
        settingsBtnOpen.style.filter = 'invert(0.7)';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        clock.style.filter = 'invert(0)';
        settingsBtnOpen.style.filter = 'invert(0)';
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

// side setting panel open and close function
const settingsBtnOpen = document.querySelector('#settings');
const settingsBtnClose = document.querySelector('#close-panel');
const sideNav = document.querySelector('.sidenav');
settingsBtnOpen.addEventListener('click', openStn);
settingsBtnClose.addEventListener('click', closeStn)
function openStn(){
    sideNav.style.width = '300px';
}
function closeStn(){
    sideNav.style.width = '0';
}