const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minites = now.getMinutes();
    const minitesDegree = (minites / 60) * 360 + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minitesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours / 12) * 360 + ((minites/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;


}

setInterval(setDate, 1000);
setDate();

