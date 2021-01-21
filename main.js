const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
// analog clock selecter
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
// get the setting from local storage
let clockTipe = 'analog';
let theme ;
if(localStorage.length>0){
    if(localStorage.hasOwnProperty('clockMode')){
        clockTipe = localStorage.getItem('clockMode')
    }
    if(localStorage.hasOwnProperty('themeMode')){
        theme = localStorage.getItem('themeMode')
    }
}
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
const clockToggleInfo = document.querySelector('.clock-toggle-info');
function clockMode(e) {
    if(e.target.checked){
        clockTipe = 'numeric'
        analog.style.display = 'none';
        numeric.style.display = 'flex';
        clockToggleInfo.textContent = 'Numeric Clock';
    }else {
        clockTipe = 'analog'
        analog.style.display = 'block';
        numeric.style.display = 'none';
        clockToggleInfo.textContent = 'Analog Clock';
    }
    // set the setting to localstorage
    setClockMode();
}
clockSwitch.addEventListener('change',clockMode)
function checkClockMode(){
    if(clockTipe == 'numeric'){
        clockSwitch.checked = true;
        analog.style.display = 'none';
        numeric.style.display = 'flex';
        clockToggleInfo.textContent = 'Numeric Clock';
    }else  {
        clockSwitch.checked = false;
        analog.style.display = 'block';
        numeric.style.display = 'none';
        clockToggleInfo.textContent = 'Analog Clock';
    }
}
checkClockMode();

// darck mode

const toggleSwitch = document.querySelector('#theme');
const clock = document.querySelector('#clock-icon');
const toggleSwitchTitle = document.querySelector('.theme-title');
toggleSwitch.checked = false;
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        clock.style.filter = 'invert(0.7)';
        settingsBtnOpen.style.filter = 'invert(0.7)';
        theme = 'dark';
        toggleSwitchTitle.textContent = 'Dark Mode';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        clock.style.filter = 'invert(0)';
        settingsBtnOpen.style.filter = 'invert(0)';
        theme = 'light';
        toggleSwitchTitle.textContent = 'Light Mode';
    }    
    setThemeMode();
}
toggleSwitch.addEventListener('change', switchTheme);
function checkTheme(){
    if(theme == 'dark'){
        toggleSwitch.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        clock.style.filter = 'invert(0.7)';
        settingsBtnOpen.style.filter = 'invert(0.7)';
    }else{
        toggleSwitch.checked = false;
        document.documentElement.setAttribute('data-theme', 'light');
        clock.style.filter = 'invert(0)';
        settingsBtnOpen.style.filter = 'invert(0)';
    }
}
// side setting panel open and close function
const settingsBtnOpen = document.querySelector('#settings');
const settingsBtnClose = document.querySelector('#close-panel');
const sideNav = document.querySelector('.sidenav');
const settingPanel = document.querySelector('.settings-panel')
settingsBtnOpen.addEventListener('click', openStn);
settingsBtnClose.addEventListener('click', closeStn)
function openStn(){
    sideNav.style.width = '100%';
    settingPanel.style.width = '300px';
}
function closeStn(){
    sideNav.style.width = '0';
    settingPanel.style.width = '0'

}
// local storage set function
function setClockMode (){
    localStorage.setItem('clockMode', clockTipe)
}
function setThemeMode(){
    localStorage.setItem('themeMode', theme)
}

// check the selected theme in lical storage
checkTheme();