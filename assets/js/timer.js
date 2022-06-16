export function Timer({
    minutesDisplay,
    secondsDisplay,
    soundAlert,
    updateTime
}) {
    
    let timer;
    let timeTimerOut = 59;
    let standardMinutes = Number(minutesDisplay.textContent);
    let countInProgress = false;

    function decreaseCount() {
        timer = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent);
            let minutes = Number(minutesDisplay.textContent);
            let isTimerOver = seconds <= 0 && minutes <= 0;

            if(isTimerOver) {
                soundAlert();
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

    return {
        decreaseCount,
        startCounting,
        stopCounting
    }
}