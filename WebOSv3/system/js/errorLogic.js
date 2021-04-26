startModule("WebOS.System.errorLogic");
function bsod(title, message) {
    if (localStorage.getItem("safeMode") != 1) {
        localStorage.setItem("BSODTitle", title);
        localStorage.setItem("BSODMessage", message);
        window.location.href = "bsod.html";
    } else {
        sendError(title, message);
    }
}

window.onerror = function errorVisualizer(errorMsg, url, lineNumber) {
    notificationService("WebOS Exception", "WebOS has encountered an internal exception:<br><br>" + errorMsg, 3000);
}

function sendError(title, message, safemodeOverride = 0) {
    createNewError(title, message, safemodeOverride);
}

function createNewError(title, message, safemodeOverride = 0) {
    if (localStorage.getItem("safeMode") != 1 || safemodeOverride == 1) {
        getElemId("windowStore").insertAdjacentHTML('beforeend', getElemId("errorMessageTemplate").innerHTML);
        var ErrID = Math.floor(Math.random() * 3276700);
        var windowId = title + " (" + ErrID + ")";
        var titleTextId = ErrID + "errorMessageBoxTitle " + title;
        var titleBarId = ErrID + "errorMessageBoxWindowTitle " + title;
        var messageId = ErrID + " " + title + " " + "errorMessageMsg"
        getElemId("errorMessageBox").id = windowId;
        getElemId("errorMessageBoxTitle").id = titleTextId
        getElemId(titleTextId).innerHTML = title;
        getElemId("errorMessageBoxWindowTitle").id = titleBarId;
        getElemId("errorMessageMsg").id = messageId;
        getElemId(messageId).innerHTML = message;
        dragElement(getElemId(windowId), getElemId(titleBarId));
        openWindow(windowId);
        playSystemSound("./system/sounds/error.mp3");
        setTimeout(() => {
            bringToFront(getElemId(windowId));
        }, 50);
    } else {
        notificationService(title, message);
    }

}