console.warn("STATUS: Initiated module: WebOS.System.startMenuLogic");
function toggleStart() {
    if (document.getElementById('startMenu').style.visibility === 'visible') {
        document.getElementById('startMenu').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('startMenu').style.visibility = 'hidden';
        }, 200);
    } else {
        document.getElementById('startMenu').style.opacity = '0'
        document.getElementById('startMenu').style.visibility = 'visible';
        document.getElementById('startMenu').style.opacity = '1';
    }
}
startMenuElements = [
    document.getElementById('startMenu'),
    document.getElementById('startButton'),
    document.getElementById('startMenuRightPane'),
    document.getElementById('startMenuLeftPane'),
]
window.addEventListener('mousedown', function (event) {
    start = document.getElementById('startMenu');
    startbutton = document.getElementById('startButton');
    if (!start.contains(event.target) && !start.contains(event.target.parentNode) && event.target.id != "startButton" && !startbutton.contains(event.target) && !startbutton.contains(event.target.parentNode)) {
        if (start.style.visibility === 'visible') {
            document.getElementById('startMenu').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('startMenu').style.visibility = 'hidden';
            }, 200);
        }
    }
});