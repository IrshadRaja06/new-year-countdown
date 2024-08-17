
const nextYear = new Date().getFullYear() + 1;
document.getElementById("year").innerText = `${nextYear}`;
const countDownDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime();

const countdownFunction = setInterval(function() {

    const now = new Date().getTime();

    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h1>HAPPY NEW YEAR!</h1>";
    }
}, 1000);
