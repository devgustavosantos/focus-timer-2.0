const buttonPlay = document.getElementById("play");
const buttonStop = document.getElementById("stop");
const buttonIncresse = document.getElementById("increase");
const buttonDecrease = document.getElementById("decrease");

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

const cardForest = document.getElementById("forest");
const cardRain = document.getElementById("rain");
const cardCoffeeShop = document.getElementById("coffee-shop");
const cardFirePit = document.getElementById("fire-pit");

const soundForest = new Audio("./assets/sound/forest.wav");
const soundRain = new Audio("./assets/sound/rain.wav");
const soundCoffeeShop = new Audio("./assets/sound/coffee-shop.wav");
const soundFirePit = new Audio("./assets/sound/fire-pit.wav");
const alertTimer = new Audio("./assets/sound/alert.mp3");

let timer;
let timeTimerOut = 59;
let countInProgress = false;


function decreaseCount() {
        timer = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);
            let isTimerOver = seconds <= 0 && minutes <= 0;
    
            if(isTimerOver) {
                alertTimer.play();
                resetTimeDisplay();
                countInProgress = false;
                return;
            }

            if(seconds <= 0) {
                minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
                secondsDisplay.textContent = String(timeTimerOut).padStart(2, "0");
            } else {
                secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
            }

            decreaseCount();
        }, 1000);
}

function resetTimeDisplay() {
    minutesDisplay.textContent = "25";
    secondsDisplay.textContent = "00";
}

function soundTurnOn(sound) {
    sound.loop = true;
    if(sound.paused){
        sound.play();
    } else {
        sound.pause();
    }
}

function activatedCard(card){
    let icon = card.children[0].children[0];
    icon.classList.toggle("sound-on-svg");
    card.classList.toggle("sound-on-div");
}

buttonPlay.addEventListener("click", function() {
    if(!countInProgress) {
        decreaseCount();
        countInProgress = true;
    }
})
  
buttonStop.addEventListener("click", function() {
    if(countInProgress) {
        clearTimeout(timer);
        resetTimeDisplay();
        countInProgress = false;
    }
})

buttonIncresse.addEventListener("click", function() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let maximumTimeReached = minutes >= 95;
    
    if(maximumTimeReached) {
        minutesDisplay.textContent = "99";
    } else {
        minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
    }
})

buttonDecrease.addEventListener("click", function() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let minimumTimeReached = (minutes > 5) || (minutes == 5 && seconds > 0);
    if(minimumTimeReached) {
        minutesDisplay.textContent = String(minutes - 5).padStart(2, "0");
    } else {
        alert("Não é possivel diminuir o tempo em 5 minutos!");
    }
})

cardForest.addEventListener("click", function() {
    soundTurnOn(soundForest);
    activatedCard(cardForest);
});

cardRain.addEventListener("click", function() {
    soundTurnOn(soundRain);
    activatedCard(cardRain);
});

cardCoffeeShop.addEventListener("click", function() {
    soundTurnOn(soundCoffeeShop);
    activatedCard(cardCoffeeShop);
})

cardFirePit.addEventListener("click", function() {
    soundTurnOn(soundFirePit);
    activatedCard(cardFirePit);
})