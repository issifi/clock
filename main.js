const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes()
    const hours = now.getHours();
    
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
    hour.innerHTML = `${hours}:`;

}
setInterval(setDate, 1000);
setDate();

// darck mod 

const toggleSwitch = document.querySelector('#theme');
const clock = document.querySelector('#clock-icon');
toggleSwitch.checked = false
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        clock.style.filter = 'invert(0.7)';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        clock.style.filter = 'invert(0)';
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);