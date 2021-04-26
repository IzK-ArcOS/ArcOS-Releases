startModule("WebOS.System.generalLogic");

function toggleClockWidget() {
    clockWidget = getElemId("taskbarClockWidget");
    if (clockWidget.style.visibility === 'visible') {
        clockWidget.style.opacity = '0';
        setTimeout(() => {
            clockWidget.style.visibility = 'hidden';
        }, 200);
    } else {
        clockWidget.style.opacity = '0'
        clockWidget.style.visibility = 'visible';
        clockWidget.style.opacity = '1';
    }
}

function toggleVolumeControlWidget() {
    volumeControl = getElemId("taskbarVolumeControl");
    if (volumeControl.style.visibility === 'visible') {
        volumeControl.style.opacity = '0';
        setTimeout(() => {
            volumeControl.style.visibility = 'hidden';
        }, 200);
    } else {
        volumeControl.style.opacity = '0'
        volumeControl.style.visibility = 'visible';
        volumeControl.style.opacity = '1';
    }
}

function startChangeUsername() {
    //minimizeWindow("Control Panel");
    openWindow("User Settings");
}


function changeUsername() {
    newUsername = getElemId("changeUsernameInputField").value;
    changeUserDataName(args.get("username"), newUsername);
}

function addNewApp() {
    try {
        if (getElemId("addAppInputField").value !== "") {
            var open = getElemId("startAppAfterAddCheckBox").checked;
            if (open == true) {
                loadWindow(getElemId("addAppInputField").value, 0, 0);
            } else {
                loadWindow(getElemId("addAppInputField").value, 1, 1);
            }
        } else {
            sendError("Application not found", "The Application you tried to import couldn't be found. Check the <b>relative</b> path and try again.");
        }
    } catch {
        sendError("Application not found", "The Application you tried to import couldn't be found. Check the <b>relative</b> path and try again.");
    }
}

function updateDesktopIcons() {
    var elmnt = getElemId("showDesktopIconsSwitch").checked;
    if (elmnt) {
        getElemId("desktopIcons").style.visibility = "visible";
        localStorage.setItem(args.get("username") + "_showDesktopIcons", "1");
    } else {
        getElemId("desktopIcons").style.visibility = "hidden";
        localStorage.setItem(args.get("username") + "_showDesktopIcons", "0");
    }
}

function configureWebOS() {
    var x = getElemId("Welcome!").getElementsByClassName("body");
    x[0].innerHTML =
        "<center><h3>Configure your copy of WebOS</h3>" +
        "</center><p style=\"padding:10px;\">Change the color scheme and taskbar location: " +
        "<button style=\"padding:10px;padding-top:5px;padding-bottom:5px;vertical-align:top;float:right;\" onclick=\"openWindow('Preferences');setTimeout(()=>{minimizeWindow(this.parentNode.parentNode.parentNode.id)},100);\">Click here</button>" +
        "<br><br>Configure account settings: " +
        "<button style=\"padding:10px;vertical-align:top;float:right;padding-top:5px;padding-bottom:5px;\" onclick=\"openWindow('User Settings');setTimeout(()=>{minimizeWindow(this.parentNode.parentNode.parentNode.id)},100);\">Click here</button>" +
        "<br><br>Load custom applications:" +
        "<button style=\"padding:10px;vertical-align:top;float:right;padding-top:5px;padding-bottom:5px;\" onclick=\"openWindow('Add Application');setTimeout(()=>{minimizeWindow(this.parentNode.parentNode.parentNode.id)},100);\">Click here</button>" +
        "<br><br>Note: when you click one of these buttons the window will minimize to the <b>taskbar</b></p><br><center>" +
        "<button style=\"padding:10px;margin-bottom:20px;\" onclick=\"closewindow(this.parentNode.parentNode.parentNode);\">Close</button>" +
        "</center>";
    getElemId("Welcome!").style.minHeight = "unset";
    getElemId("Welcome!").style.maxHeight = "unset";
    getElemId("Welcome!").style.height = "fit-content"
}

function loadJS(file) {
    (async() => { import (file); })();
}

window.addEventListener("click", e => {
    updateTitlebar();
});