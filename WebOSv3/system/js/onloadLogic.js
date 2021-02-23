console.warn("STATUS: Initiated module: WebOS.System.onloadLogic");

onload = function () {
    notificationService("test", "Currently developing the notification service, wish me luck!");
    current = 0; target = document.getElementsByClassName("window").length;
    while (current != target) {
        dragElement(document.getElementsByClassName("window")[current], document.getElementsByClassName("windowTitle")[current]);
        current++;
    }

    console.log("STATUS: Initiated module: WebOS.System.WebOSShell");
    const zargs = new URLSearchParams(window.location.search);
    if (zargs.get("noShell") === '1') {
        document.getElementById("shellLoader").href = "";
    }

    if (zargs.get("redirectLogin") === "1") {
        window.location.href = "./login.html?username=" + (args.get("username") || Administrator);
    }
    console.dir("STATUS: Loading applications...");
    loadWindow("./system/applications/controlPanel.app");
    loadWindow("./system/applications/welcomewindow.app");
    loadWindow("./system/applications/shutdown.app");
    loadWindow("./system/applications/changeUsername.app");
    loadWindow("./system/applications/themeSelector.app");
    loadWindow("./system/applications/addApp.app");
    loadWindow("./system/applications/runCommand.app");
    document.getElementById("usernameStartMenu").innerHTML = args.get('username') || "Administrator";
    setTimeout(() => {
        try {
            document.getElementById("changeUsernameOldUsername").innerHTML = args.get('username') || "Administrator "
            checkbox = document.getElementById("autoLoginCheckMark");

            if (localStorage.getItem("autologin") == 1) {
                checkbox.setAttribute("checked", "true");
            }
        } catch { }
    }, 500);
    startTime();

    if (localStorage.getItem("theme") !== "") {
        var theme = localStorage.getItem("theme");
        if (theme === "darkrounded") {
            document.getElementById("addonShellLoader").href = "";
        } else if (theme === "darksharp") {
            document.getElementById("addonShellLoader").href = "./system/css/darkModeSharp.css"
        } else if (theme === "lightrounded") {
            document.getElementById("addonShellLoader").href = "./system/css/lightModeRounded.css"
        } else if (theme === "lightsharp") {
            document.getElementById("addonShellLoader").href = "./system/css/lightModeSharp.css"
        }
    }

    if (localStorage.getItem("taskbarpos") !== "") {
        var pos = localStorage.getItem("taskbarpos");
        if (pos === "top") {
            document.getElementById("taskbarAddonLoader").href = "./system/css/taskbarOnTop.css";
        } else if (pos === "bottom") {
            document.getElementById("taskbarAddonLoader").href = "";
        }
    }

    var show = localStorage.getItem("showDesktopIcons");
    if (show == '1') {
        document.getElementById("showDesktopIconsSwitch").setAttribute('checked', 'true');
        document.getElementById("desktopIcons").style.visibility = 'visible';
    } else if (show == '0') {
        document.getElementById("desktopIcons").style.visibility = 'hidden';
    } else {
        document.getElementById("showDesktopIconsSwitch").setAttribute('checked', 'true');
        document.getElementById("desktopIcons").style.visibility = 'visible';
        localStorage.setItem("showDesktopIcons", '1')
    }

    setTimeout(() => {
        document.getElementsByClassName("block")[0].style.visibility = "hidden";
        document.getElementsByClassName("block")[0].style.opacity = "0";
        setTimeout(() => {
            if (localStorage.getItem("dispWelcome") != 0) {
                openWindow("Welcome!");
            }
        }, 1000);
    }, 2000);

}
console.log("STATUS: Started WebOS.WebOS.System.onloadLogic.startTime service")
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('taskbarClock').innerText =
        h + ":" + m;
    document.getElementById("taskbarClockWidgetTime").innerText =
        h + ":" + m + ":" + s
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
console.log("STATUS: Started WebOS.System.onloadLogic.EventListener.mousedown for taskbarClockWidget");
window.addEventListener('mousedown', function (event) {
    clockWidget = document.getElementById('taskbarClockWidget');
    clockButton = document.getElementById('taskbarClock');
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
});

