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


buttonIncresse.addEventListener("click", function() {
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5);
})

buttonDecrease.addEventListener("click", function() {
    let minutes = Number(minutesDisplay.textContent)
    if(minutes >= 5) {
        minutesDisplay.textContent = String(minutes - 5);
    } else {
        alert("Não é possivel diminuir o tempo em 5 minutos!")
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