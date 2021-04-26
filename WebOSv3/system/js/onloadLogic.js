const { globalShortcut } = require("electron");

startModule("WebOS.System.onloadLogic");

onload = function WebOSOnload() {

    if (!clientInformation.appVersion.includes("Electron")) { window.location.href = "invalidClient.html"; }
    if (localStorage.getItem(args.get("username") + "_showDesktopIcons") == null) { localStorage.setItem(args.get("username") + "_showDesktopIcons", 1); }
    for (var i = 0; i < document.getElementsByClassName("window").length; i++) { dragElement(document.getElementsByClassName("window")[current], document.getElementsByClassName("windowTitle")[current]); }
    const zargs = new URLSearchParams(window.location.search);
    if (zargs.get("noShell") === '1') { getElemId("shellLoader").href = ""; }
    if (zargs.get("redirectLogin") === "1") { window.location.href = "./login.html" }

    loadWindow("./system/applications/controlPanel.app", 1);
    loadWindow("./system/applications/calculator.app", 1);
    loadWindow("./system/applications/shutdown.app", 1);
    loadWindow("./system/applications/changeUsername.app", 0);
    loadWindow("./system/applications/themeSelector.app", 1);
    loadWindow("./system/applications/addApp.app", 1);
    loadWindow("./system/applications/runCommand.app", 1);
    loadWindow("./system/applications/wallpaperSettings.app", 1);
    loadWindow("./system/applications/systemSettings.app", 1);
    loadWindow("./system/applications/notepad.app", 1);
    loadWindow("./system/applications/programData/Notepad/utils/loadFile.app", 1);
    loadWindow("./system/applications/programData/Notepad/utils/saveFile.app", 1);
    loadWindow("./system/applications/programData/Notepad/utils/delFile.app", 1);
    loadWindow("./system/applications/userInterface.app", 1);
    loadWindow("./system/applications/desktopIcons.app", 1);
    loadWindow("./system/applications/programData/User Settings/utils/changePassword.app", 1);
    loadWindow("./system/applications/programData/User Settings/utils/changeUsername.app", 1);
    loadWindow("./system/applications/programData/User Settings/utils/changeUserPicture.app", 1);
    loadWindow("./system/applications/programData/User Settings/utils/createUserAccount.app", 1);
    setTimeout(() => {
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.altKey && e.shiftKey && e.key.toLowerCase() == "x") {
                openWindow("Execute Command");
            }
        })
        if (localStorage.getItem("safeMode") != 1) {
            try {




                setTimeout(() => {
                    try {
                        getElemId("changeUsernameOldUsername").innerHTML = args.get('username');
                    } catch {}
                }, 500);
                startTime();

                if (zargs.get("username") + "_theme" !== "") {
                    var theme = localStorage.getItem(zargs.get("username") + "_theme");
                    if (theme === "darkrounded") {
                        getElemId("addonShellLoader").href = "";
                    } else if (theme === "darksharp") {
                        getElemId("addonShellLoader").href = "./system/css/darkModeSharp.css"
                    } else if (theme === "lightrounded") {
                        getElemId("addonShellLoader").href = "./system/css/lightModeRounded.css"
                    } else if (theme === "lightsharp") {
                        getElemId("addonShellLoader").href = "./system/css/lightModeSharp.css"
                    }
                } else {
                    localStorage.setItem(zargs.get("username") + "_theme", "darkrounded");
                }

                if (localStorage.getItem(zargs.get("username") + "_taskbarpos") !== "") {
                    var pos = localStorage.getItem(zargs.get("username") + "_taskbarpos");
                    if (pos === "top") {
                        getElemId("taskbarAddonLoader").href = "./system/css/taskbarOnTop.css";
                    } else if (pos === "bottom") {
                        getElemId("taskbarAddonLoader").href = "";
                    }
                }

                setTimeout(() => {

                    setTimeout(() => {
                        if (localStorage.getItem(zargs.get("username") + "_dispWelcome") != 0 && localStorage.getItem("safeMode") != 1) {
                            loadWindow("./system/applications/welcomewindow.app", 1);
                            setTimeout(() => {
                                openWindow("Welcome!");
                                localStorage.setItem(zargs.get("username") + "_dispWelcome", 0)
                                if (localStorage.getItem("safeMode") == 1) {

                                }
                            }, 300);
                        }
                    }, 500);
                }, 1000);
            } catch (e) { bsod("SYSTEM_INIT_FAILED", "WebOSv3 initialization failed. Details:<Br><br>" + e) }

        } else {
            document.getElementsByClassName("block")[0].style.backgroundImage = "unset";
            getElemId("addonShellLoader").href = "./system/css/darkModeSharp.css";
            getElemId("animationsAddonLoader").href = "system/css/noAnimations.css";
            document.body.style.backgroundImage = "unset";
            sendError("Safe Mode", "WebOS is running in Safe Mode.<Br> - If this was not your intention, just restart from the start menu.<Br> - If this was your intention, use this mode only to repair WebOS if it doesn't boot. ", 1)
        }

        setTimeout(() => {
            try { getElemId("usernameStartMenu").innerHTML = args.get('username'); } catch {}
            hideMenu();
            onloadSetWindowControls();
            setToolbarTrigger();
            startTime();

            startResolutionUpdateCycle(100);
            setTimeout(() => {
                document.getElementsByClassName("block")[0].style.visibility = "hidden";
                document.getElementsByClassName("block")[0].style.opacity = "0";
                startUserDataUpdateCycle();
            }, 2000);


        }, 100);
    }, 50);
}

onbeforeunload = function() {
    localStorage.setItem("safeMode", 0);
    localStorage.removeItem("username")
    deleteUserData("WebOS Safe Mode");
}

notifyStartService("WebOS.System.onloadLogic.startTime service");

function startTime() {
    try {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        getElemId('taskbarClock', 0).innerText =
            h + ":" + m;
        getElemId("taskbarClockWidgetTime", 0).innerText =
            h + ":" + m + ":" + s
        var t = setTimeout(startTime, 500);
    } catch {}
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

notifyStartService("WebOS.System.startMenuLogic.EventListener.mousedown", "startMenu")
notifyStartService("WebOS.System.onloadLogic.EventListener.mousedown", "taskbarClockWidget");
window.addEventListener('mousedown', function(event) {
    try {
        clockWidget = getElemId('taskbarClockWidget');
        clockButton = getElemId('taskbarClock');
        if (!clockWidget.contains(event.target) &&
            !clockButton.contains(event.target) &&
            !clockWidget.contains(event.target.parentNode) &&
            !clockButton.contains(event.target.parentNode)) {
            if (clockWidget.style.visibility === 'visible') {
                clockWidget.style.opacity = '0';
                setTimeout(() => {
                    clockWidget.style.visibility = 'hidden';
                }, 200);
            }
        }
    } catch {
        bsod("CRITICAL_ELEMENT_MISSING", "An element required to run the operating system is missing or corrupt. Please contact the system administrator for further assistance.")
    }
});

notifyStartService("WebOS.System.onloadLogic.EventListener.mousedown", "taskbarVolumeControl");
window.addEventListener('mousedown', function(event) {
    try {
        volumeControl = getElemId('taskbarVolumeControl');
        volumeButton = getElemId('taskbarVolumeButton');
        if (!volumeControl.contains(event.target) &&
            !volumeButton.contains(event.target) &&
            !volumeControl.contains(event.target.parentNode) &&
            !volumeButton.contains(event.target.parentNode)) {
            if (volumeControl.style.visibility === 'visible') {
                volumeControl.style.opacity = '0';
                setTimeout(() => {
                    volumeControl.style.visibility = 'hidden';
                }, 200);
            }
        }
    } catch { bsod("CRITICAL_ELEMENT_MISSING", "An element required to run the operating system is missing or corrupt. Please contact the system administrator for further assistance.") }

});

function onloadSetWindowControls() {
    try {
        notifyStartService("WebOS.System.onloadLogic.onloadSetWindowControls");
        if (localStorage.getItem(args.get("username") + "_enableAnimations") == "false") {
            getElemId("preferencesAnimationsSwitch").checked = false;
            getElemId("animationsAddonLoader").href = "system/css/noAnimations.css";
        } else {
            getElemId("preferencesAnimationsSwitch").checked = true;
            getElemId("animationsAddonLoader").href = "";
        }
        if (localStorage.getItem(args.get("username") + "_titlebarButtonsLeft") == "true") {
            getElemId("preferencesTitlebarButtonsSwitch").checked = true;
            getElemId("titlebarAddonLoader").href = "system/css/titleBarButtonsLeft.css";

        } else {
            getElemId("preferencesTitlebarButtonsSwitch").checked = false;
            getElemId("titlebarAddonLoader").href = "";
        }
        if (localStorage.getItem(args.get("username") + "_muted") == 1) {
            getElemId("volumeControlEnableSoundSwitch").checked = true;
        } else {
            localStorage.setItem(args.get("username") + "_muted", 0);
        }
    } catch (e) {
        notificationService("Startup tasks", "Some tasks in the onloadLogic couldn't be completed.<br>If you experience issues with preferences, restart WebOS and try again.<Br><bR>" + e)
    }
}

function onloadSetDesktopIcons() {
    notifyStartService("WebOS.System.onloadLogic.onloadDesktopIcons");
    var show = localStorage.getItem(args.get("username") + "_showDesktopIcons");
    if (show == 0) {
        getElemId("desktopIcons").style.visibility = 'hidden';
        localStorage.setItem(args.get("username") + "_showDesktopIcons", 0);
    } else if (show == 1) {
        getElemId("showDesktopIconsSwitch").setAttribute('checked', 'true');
        getElemId("desktopIcons").style.visibility = 'visible';
        localStorage.setItem(args.get("username") + "_showDesktopIcons", 1);
    } else if (show == null) {
        getElemId("showDesktopIconsSwitch").setAttribute('checked', 'true');
        getElemId("desktopIcons").style.visibility = 'visible';
        localStorage.setItem(args.get("username") + "_showDesktopIcons", 1);
    }
}

window.addEventListener('keydown', (e) => {
    const { key, altKey } = e;
    if (key === 'F4' && altKey) {
        e.preventDefault();
        if (activeapps.length == 0) {
            openWindow("Shut Down WebOS");
        } else {
            closewindow(getElemId(focusedWindow));
        }
        e.stopImmediatePropagation();
        e.stopPropagation();

    }
});

setInterval(() => {
    try {
        var passwordStatus;
        if (localStorage.getItem(username + "_pswd") != null) {
            passwordStatus = "Password Protected";
        } else {
            passwordStatus = "No Password";
        }
        document.getElementById("usernameDisplay").innerHTML = args.get("username");
        document.getElementById("userSettingsPasswordStatusDisplay").innerHTML = passwordStatus;
        document.getElementById("userSettingsProfilePicture").src = "./system/images/profilePictures/" + localStorage.getItem(username + "_picture") + ".png";
    } catch {}
}, 100);