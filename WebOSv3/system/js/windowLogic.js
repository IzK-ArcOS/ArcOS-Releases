startModule("WebOS.System.windowLogic");

function closewindow(window) {
    notifyStartService("WebOS.System.windowLogic.closewindow: " + window.id);
    try {

        try {
            window.style.opacity = '0';
            setTimeout(() => {
                window.style.visibility = "hidden";
                window.style.display = "none";
                window.style.left = "60px";
                window.style.top = "60px";
                if (!noResize.includes(window.id)) {
                    window.style.width = "fit-content";
                    window.style.height = "fit-content";
                }
                window.style.top = '50%';
                window.style.left = '50%';
            }, 300);
        } catch (e) {}
        for (var i = 0; i < activeapps.length; i++) { if (window.id == activeapps[i]) { activeapps.splice(i, 1); } }
        updateTaskBar();
    } catch {
        try {
            try {
                window = document.getElementById(window)
                notifyStartService("WebOS.System.windowLogic.closewindow: " + window.id + " * ALT *");

                window.style.opacity = '0';
                setTimeout(() => {
                    window.style.visibility = "hidden";
                    window.style.display = "none";
                    window.style.left = "60px";
                    window.style.top = "60px";
                    if (!noResize.includes(window.id)) {
                        window.style.width = "fit-content";
                        window.style.height = "fit-content";
                    }
                    window.style.top = '50%';
                    window.style.left = '50%';
                }, 300);
            } catch (e) {}
            for (var i = 0; i < activeapps.length; i++) { if (window.id == activeapps[i]) { activeapps.splice(i, 1); } }
            updateTaskBar();

        } catch {
            notificationService('Error closing window', "WebOS was unable to close the window.<br><Br>Please check the name and try again.");
        }
    }
}


function openWindow(window) {
    notifyStartService("WebOS.System.windowLogic.openWindow: " + window);
    var windowName = window;
    window = document.getElementById(window);
    if (!activeapps.includes(windowName)) {
        activeapps.push(windowName);
        window.style.opacity = "1";
        setTimeout(() => {
            window.style.visibility = "visible";
            setTimeout(() => {
                window.style.display = "unset";
                setTimeout(() => {
                    updateTaskBar();
                    updateTitlebar();
                    focusedWindow = windowName;
                    bringToFront(window);
                }, 50);
            }, 50);
        }, 50);
    } else {
        if (window.style.opacity == '0' && activeapps.includes(windowName)) {
            window.style.display = "unset";
            window.style.opacity = "1";
            setTimeout(() => {
                window.style.visibility = "visible";
            }, 50);
        } else {
            minimizeWindow(windowName);
        }
    }
    try {
        getElemId('startMenu').style.opacity = '0';
        setTimeout(() => {
            getElemId('startMenu').style.visibility = 'hidden';
        }, 200);
    } catch {}
}

function minimizeWindow(window) {
    notifyStartService("WebOS.System.windowLogic.minimizeWindow: " + window);
    window = getElemId(window);
    window.style.opacity = '0';
    setTimeout(() => {
        window.style.visibility = "hidden";
        window.style.display = "none";
    }, 300);
}

function updateTaskBar() {
    try {
        notifyStartService("WebOS.System.windowLogic.updateTaskbar");
        var str = "";
        activeapps.forEach(element => { str += "<button class=\"taskbarButton\" onclick='openWindow(\"" + element + "\")'><p>" + element + "</p></button> "; });
        getElemId("taskbarButtons").innerHTML = str;
    } catch { notificationService("Error", "Unable to update taskbar, is <code>userInterface</code> loaded?") }

}

function bringToFront(window) {
    try {
        maxamount += 10
        window.style.zIndex = maxamount;
        focusedWindow = window.id;
    } catch (e) {}
}

function loadWindow(appFile, fromKernel = 0, fromAddApp = 0) {
    notifyLoadApp(appFile);
    var x = fetch(appFile).then(response => response.text()).then(text => {
        getElemId("windowStore").insertAdjacentHTML("afterbegin", text);
        for (var i = 0; i < document.getElementsByClassName("window").length; i++) {
            dragElement(document.getElementsByClassName("window")[i], document.getElementsByClassName("windowTitle")[i]);
        }
        if (fromKernel == 0) { openWindow(getElemId("windowStore").childNodes[0].id); }
        if (fromAddApp == 1) {
            notificationService(
                "Add application",
                "The app has been loaded, but needs to be started from " +
                "<B>Execute Command</B> with the following command:" +
                "<br><code>openWindow(\"" + getElemId("windowStore").childNodes[0].id + "\");</code><br><Br>" +
                "<button onclick=\"openWindow('" + getElemId("windowStore").childNodes[0].id + "');\">Open loaded app</button>");
        }
    }).catch(function() { sendError("System Error", "The system cannot find the application specified.<br>Please check the name and try again<br><br>File: " + appFile); });
}

function updateTitlebar() {
    var x = activeapps;
    for (var i = 0; i < x.length; i++) {
        getElemId(x[i]).children[0].style.backgroundColor = "#DFDFDF62";
    }
    if (localStorage.getItem(args.get("username") + "_theme") == null) localStorage.setItem(args.get("username") + "_theme", "darkrounded");
    if (localStorage.getItem("safeMode") != 1) {
        var w = localStorage.getItem(args.get("username") + "_theme");
        if (w.includes("light")) {
            var x = activeapps;
            for (var i = 0; i < x.length; i++) {
                if (focusedWindow == x[i] && !excludeTitlebarChange.includes(x[i])) {
                    getElemId(x[i]).children[0].style.backgroundColor = "#DFDFDF62";
                } else {
                    getElemId(x[i]).children[0].style.backgroundColor = "#ffffff00";
                }
            }
        } else {
            var x = activeapps;
            for (var i = 0; i < x.length; i++) {
                if (focusedWindow == x[i] && !excludeTitlebarChange.includes(x[i])) {
                    getElemId(x[i]).children[0].style.backgroundColor = "#1e1e1e62";
                } else {
                    getElemId(x[i]).children[0].style.backgroundColor = "#ffffff00";
                }
            }
        }
    } else {
        var x = activeapps;
        for (var i = 0; i < x.length; i++) {
            if (focusedWindow == x[i] && !excludeTitlebarChange.includes(x[i])) {
                getElemId(x[i]).children[0].style.backgroundColor = "#1e1e1e62";
            } else {
                getElemId(x[i]).children[0].style.backgroundColor = "#ffffff00";
            }
        }
    }
}

/*setInterval(() => {
    updateTitlebar();
}, 10);*/

function closeAllWindows() {
    for (var i = 0; i < document.getElementById("windowStore").childNodes.length; i++) {
        closewindow(document.getElementById("windowStore").childNodes[i]);
        activeapps = [];
    }
}