const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    second.innerHTML = seconds;

    const mins = now.getMinutes()
    minute.innerHTML = `${mins}:`;

    const hours = now.getHours();
    hour.innerHTML = `${hours}:`;
}
setInterval(setDate, 1000);
setDate();