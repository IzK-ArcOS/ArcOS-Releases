console.warn("STATUS: Initiated module: WebOS.System.powerLogic");
function resetSettings() {
    localStorage.clear();
}

function shutDown() {
    document.getElementById("bdy").style.opacity = "0";
    setTimeout(() => {
        window.location.href = 'shutdown.html?username=' + username;
    }, 1000);
}

function useAutoLogin() {
    if (document.getElementById("autoLoginCheckMark").checked) {
        localStorage.setItem("autologin", 1);
    } else {
        localStorage.setItem("autologin", 0);
    }
}

function logoff() {
    if (localStorage.getItem("autologin") == 1) {
        sendError("Can't log off", "At this stage in development of WebOS, it is not <i>yet</i> possible to logoff with autoLogin enabled.<br>To disable autologin, goto <code>Control panel > User Settings</code> and uncheck <code>Automatically login with username</code>.")
    } else {
        window.location.href = 'logoff.html?username=' + username;
    }
}

function AARD() {
    bsod("AARD", "Happy now? You just triggered the W.O.S.A.S.D (<b>W</b>eb<b>OS</b> <b>A</b>utomatic <b>S</b>elf <b>D</b>estruct).<Br><br>By the time you're done reading this WebOS will be locked up.")
}