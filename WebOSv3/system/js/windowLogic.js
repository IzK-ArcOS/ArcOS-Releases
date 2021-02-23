noResize = [
    'Execute Command',
    'Welcome!',
    "Error Message"
]

console.warn("STATUS: Initiated module: WebOS.System.windowLogic");
function closewindow(window) {
    console.log("STATUS: Started WebOS.System.windowLogic.closewindow: " + window);
    try {
        window.style.opacity = '0';
        setTimeout(() => {
            window.style.visibility = "hidden";
            window.style.left = "60px";
            window.style.top = "60px";
            if (!noResize.includes(window.id)) {
                window.style.width = "fit-content";
                window.style.height = "fit-content";
            }
            window.style.top = '50%';
            window.style.left = '50%';
        }, 300);
    } catch { }

    current = 0, target = activeapps.length;
    while (current != target) {
        if (window.id.includes(activeapps[current])) {
            activeapps.splice(current, 1);
        }
        current++;
    }
    updateTaskBar();
}

function openWindow(window) {
    try {
        if (window != "Welcome!") {

            console.log("STATUS: Started WebOS.System.windowLogic.openWindow: " + window);
            windowName = window;
            window = document.getElementById(window);
            bringToFront(window);
            window.style.opacity = '0'
            window.style.visibility = 'visible';
            window.style.opacity = '1';
            if (!activeapps.includes(windowName)) {
                activeapps.push(windowName);
                updateTaskBar();

            }
            document.getElementById('startMenu').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('startMenu').style.visibility = 'hidden';
            }, 200);
        } else {
            if (localStorage.getItem("dispWelcome") == 0) {
                sendError("Welcome Wizard", "The welcome wizard is a one-time program, meaning that after you close it, it CANNOT be opened again.<br>To open the welcome window, reset your account.")
            } else {

                console.log("STATUS: Started WebOS.System.windowLogic.openWindow: " + window);
                windowName = window;
                window = document.getElementById("Welcome!");
                bringToFront(window);
                window.style.opacity = '0'
                window.style.visibility = 'visible';
                window.style.opacity = '1';
                if (!activeapps.includes(windowName)) {
                    activeapps.push(windowName);
                    updateTaskBar();

                }
                document.getElementById('startMenu').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('startMenu').style.visibility = 'hidden';
                }, 200);
            }

        }
    } catch { }
}

function minimizeWindow(window) {
    console.log("STATUS: Started WebOS.System.windowLogic.minimizeWindow: " + window);
    window = document.getElementById(window);
    window.style.opacity = '0';

    setTimeout(() => {
        window.style.visibility = "hidden";
    }, 300);
}

function updateTaskBar() {
    console.log("STATUS: Started WebOS.System.windowLogic.updateTaskbar");
    var str = "";
    activeapps.forEach(element => {
        str += "<button class=\"taskbarButton\" onclick='openWindow(\"" + element + "\")'><p>" + element + "</p></button> ";
    });
    document.getElementById("taskbarButtons").innerHTML = str;
}

function bringToFront(window) {
    try {
        console.log("STATUS: Started WebOS.System.windowLogic.bringToFront: " + window.id);
        maxamount += 10
        window.style.zIndex = maxamount;
    } catch { }

}

function loadWindow(appFile) {
    console.log("STATUS: Started WebOS.System.windowLogic.loadWindow: loading .app file " + appFile);
    var x = fetch(appFile)
        .then(response => response.text())
        .then(text => {
            document.getElementById("windowStore").innerHTML += text;
            current = 0; target = document.getElementsByClassName("window").length;
            while (current != target) {
                dragElement(document.getElementsByClassName("window")[current], document.getElementsByClassName("windowTitle")[current]);
                current++;
            }
        })
        .catch(function () {
            sendError("System Error", "The system cannot find the application specified.<br>Please check the name and try again<br><br>File: " + appFile);
        });

}
