////////////////////////////////////////////////////////////////////////
// The below variable, "start", specifies at what page WebOS starts. //
// This variable can have one of the following values:              //
// 0 - Start at the bootscreen (main.html)                         //
// 1 - Start at the login (login.html)                            //
// 2 - Start at the WebOS Desktop (webos.html)                   //
//////////////////////////////////////////////////////////////////
var start = 0; //
////////////////////////////////////////////////////////////////
// Please don't modify any of the below code, if you do you  //
// can damage the runtime of WebOS.                         //
/////////////////////////////////////////////////////////////

var win;
const { app, BrowserWindow } = require('electron')

app.on("ready", () => {
    const { app, globalShortcut } = require('electron')

    globalShortcut.register("Alt+Enter", () => {
        if (BrowserWindow.getFocusedWindow().fullScreen == true) {
            BrowserWindow.getFocusedWindow().fullScreen = false;
        } else {
            BrowserWindow.getFocusedWindow().fullScreen = true;
        }
    })

    globalShortcut.register('Control+Shift+I', () => {
        BrowserWindow.getFocusedWindow().toggleDevTools();
    })
    globalShortcut.register("F4", () => {
        return false;
    })

    globalShortcut.register("Control+Alt+Shift+R", () => {
        win.loadFile("main.html")
    })
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        minWidth: 1000,
        minHeight: 700,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            devTools: true
        },
        backgroundColor: "#111",
    })

    win.removeMenu();

    loadStartPage();

    win.on("maximize", () => {
        win.unmaximize();
        setTimeout(() => {
            win.fullScreen = true;
        }, 50);
    })
})

function loadStartPage() {
    switch (start) {
        case 0:
            win.loadFile("main.html");
            break;
        case 1:
            win.loadFile("login.html");
            break;
        case 2:
            win.loadFile("webos.html");
            break;
    }
}