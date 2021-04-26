startModule("WebOS.System.startMenuLogic");
function toggleStart() {
    if (getElemId('startMenu').style.visibility === 'visible') {
        getElemId('startMenu').style.opacity = '0';
        setTimeout(() => {
            getElemId('startMenu').style.visibility = 'hidden';
        }, 200);
    } else {
        getElemId('startMenu').style.opacity = '0'
        getElemId('startMenu').style.visibility = 'visible';
        getElemId('startMenu').style.opacity = '1';
    }
}

window.addEventListener('mousedown', function (event) {
    try {
        start = getElemId('startMenu');
        startbutton = getElemId('startButton');
        if (!start.contains(event.target) && !start.contains(event.target.parentNode) && event.target.id != "startButton" && !startbutton.contains(event.target) && !startbutton.contains(event.target.parentNode)) {
            if (start.style.visibility === 'visible') {
                getElemId('startMenu').style.opacity = '0';
                setTimeout(() => {
                    getElemId('startMenu').style.visibility = 'hidden';
                }, 200);
            }
        }
    } catch {
        bsod("CRITICAL_ELEMENT_MISSING", "An element required to run the operating system is missing or corrupt. Please contact the system administrator for further assistance.")
    }
});