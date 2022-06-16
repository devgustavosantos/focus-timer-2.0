//Elements-------------------------------------------
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


// Timer---------------------------------------------------------
let timer;
let timeTimerOut = 59;
let standardMinutes = minutesDisplay;
let countInProgress = false;

function decreaseCount() {
    timer = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        let isTimerOver = seconds <= 0 && minutes <= 0;

        if(isTimerOver) {
            soundAlert.play();
            updateTime(standardMinutes, 0);
            countInProgress = false;
            return;
        }

        if(seconds <= 0) {
            updateTime((minutes - 1), timeTimerOut);
        } else {
            updateTime(minutes, (seconds - 1));
        }

        decreaseCount();
    }, 1000);
}

function startCounting() {
    if(!countInProgress) {
        decreaseCount();
        countInProgress = true;
    } else {
        alert("Não é possivel iniciar o temporizador, pois ele já está em andamento!");
    }
}

function stopCounting() {
    if(countInProgress) {
        clearTimeout(timer);
        updateTime(standardMinutes, 0);
        countInProgress = false;
    } else {
        alert("Não é possivel parar o temporizador o temporizador, pois ele já foi interrompido!");
    }
}


// Display ---------------------------------------------------------------------------
function updateTime(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function userIncreasedTime() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let maximumTimeReached = minutes >= 95;
    
    if(maximumTimeReached) {
        updateTime(99, 59);
        alert("O tempo máximo do temporizador é de 99:59!");

    } else {
        updateTime((minutes + 5), seconds);
    }
}

function userDecreasedTime() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let minimumTimeReached = (minutes > 5) || (minutes == 5 && seconds > 0);
    
    if(minimumTimeReached) {
        updateTime((minutes - 5), seconds);
    } else {
        alert("Não é possivel diminuir o tempo em 5 minutos!");
    }
}

function activatedCard(card){
    let icon = card.children[0].children[0];
    icon.classList.toggle("sound-on-svg");
    card.classList.toggle("sound-on-div");
}

// Sounds ----------------------------------------------------------------------------------
const soundForest = new Audio("./assets/sound/forest.wav");
const soundRain = new Audio("./assets/sound/rain.wav");
const soundCoffeeShop = new Audio("./assets/sound/coffee-shop.wav");
const soundFirePit = new Audio("./assets/sound/fire-pit.wav");
const soundAlert = new Audio("./assets/sound/alert.mp3");

function soundTurnOn(sound) {
    sound.loop = true;
    if(sound.paused){
        sound.play();
    } else {
        sound.pause();
    }
}


// Index ----------------------------------------------------------------------------
buttonPlay.addEventListener("click", function() {
   startCounting();
})
  
buttonStop.addEventListener("click", function() {
   stopCounting();
})

buttonIncresse.addEventListener("click", function() {
    userIncreasedTime();
})

buttonDecrease.addEventListener("click", function() {
    userDecreasedTime();
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


// testes -----------------------------------------------------
