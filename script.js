let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let beep = document.getElementById("beep");
let progress = document.getElementById("progress");

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`;
    let angle = (seconds % 60) * 6;
    progress.style.background = `conic-gradient(#5ab6ff ${angle}deg, #240057 ${angle}deg)`;
}

function start() {
    if (timer !== null) clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
    beep.play();
}

function pause() {
    clearInterval(timer);
    beep.play();
}

function reset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
    progress.style.background = "conic-gradient(#5ab6ff 0deg, #240057 0deg)";
    beep.play();
}

function lap() {
    const lapTime = display.innerText;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
    beep.play();
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}