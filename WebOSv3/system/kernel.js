

const { app, BrowserWindow } = require('electron')
const { appendFile } = require('fs')
var prevwidth = 0;
var prevheight = 0;
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('webos.html');
}

app.whenReady().then(() => {
    const { app, globalShortcut } = require('electron')
    globalShortcut.register('F11', () => {
        return false;
    });
    globalShortcut.register('Control+Shift+I', () => {
        BrowserWindow.getFocusedWindow().toggleDevTools();
    })

}).then(createWindow)


app.on('exit', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


