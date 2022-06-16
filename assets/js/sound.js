export function Sounds() {
    const forest = new Audio("./assets/sound/forest.wav");
    const rain = new Audio("./assets/sound/rain.wav");
    const coffeeShop = new Audio("./assets/sound/coffee-shop.wav");
    const firePit = new Audio("./assets/sound/fire-pit.wav");
    const alert = new Audio("./assets/sound/alert.mp3");
    
    function turnOnAmbient(sound) {
        sound.loop = true;
        if(sound.paused){
            sound.play();
        } else {
            sound.pause();
        }
    }
    
    function turnOnAlert() {
        alert.play();
    }

    return {
        forest,
        rain,
        coffeeShop,
        firePit,
        turnOnAmbient,
        turnOnAlert
    }
}