console.warn("STATUS: Initiated Module: WebOS.System.generalLogic");
function toggleClockWidget() {
    clockWidget = document.getElementById("taskbarClockWidget");
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

function startChangeUsername() {
    minimizeWindow("Control Panel");
    openWindow("User Settings");
}

var newUsername = "";
function changeUsername() {
    newUsername = document.getElementById("changeUsernameInputField").value;
    if (newUsername != "AARD") {
        window.location.href = "applynewusername.html?username=" + newUsername;
    } else {
        AARD();
    }
}

function addNewApp() {
    try {
        if (document.getElementById("addAppInputField").value !== "") {
            loadWindow(document.getElementById("addAppInputField").value);
        } else {
            sendError("Application Error", "The system detected a failure in <B>WebOS.System.Applications.AddApp.</b><br>Application Execution will continue, but might be unstable.<br><br>Cause: addAppInputField was \"\" (string.empty).")
        }

    } catch {
        sendError("Application not found", "The Application you tried to import couldn't be found. Check the RELATIVE path and try again.");
    }
}

function updateDesktopIcons() {
    var elmnt = document.getElementById("showDesktopIconsSwitch").checked;
    if (elmnt) {
        document.getElementById("desktopIcons").style.visibility = "visible";
        localStorage.setItem("showDesktopIcons", "1");
    } else {
        document.getElementById("desktopIcons").style.visibility = "hidden";
        localStorage.setItem("showDesktopIcons", "0");
    }
}

function configureWebOS() {
    var x = document.getElementById("Welcome!").getElementsByClassName("body");
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
    document.getElementById("Welcome!").style.minHeight = "unset";
    document.getElementById("Welcome!").style.maxHeight = "unset";
    document.getElementById("Welcome!").style.height = "fit-content"
}
