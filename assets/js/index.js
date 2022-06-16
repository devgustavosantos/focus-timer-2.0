import { Timer } from "./timer.js";
import { Display } from "./display.js";
import { Sounds } from "./sound.js";
import { Events } from "./events.js";
import {
    minutesDisplay,
    secondsDisplay,
} from "./elements.js";


const sound = Sounds();

const display = Display({
    minutesDisplay,
    secondsDisplay
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    soundAlert: sound.turnOnAlert,
    updateTime: display.updateTime,
});

Events({  
    timer,
    display,
    sound
});