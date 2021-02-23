console.warn("STATUS: Initiated module: WebOS.System.errorLogic");
function bsod(title, message) {
    localStorage.setItem("BSODTitle", title);
    localStorage.setItem("BSODMessage", message);
    window.location.href = "bsod.html";
}

window.onerror = function errorVisualizer(errorMsg, url, lineNumber) {
    sendError("WebOS Exception", "WebOS has encountered an internal exception:<br><br>" + errorMsg + '<br><br>At Line: WebOS.System: ' + lineNumber);
}

function sendError(title, message) {
    createNewError(title, message);
}

function createNewError(title, message) {
    document.getElementById("windowStore").innerHTML += document.getElementById("errorMessageTemplate").innerHTML;
    var ErrID = Math.floor(Math.random() * 32767);
    var windowId = "[" + ErrID + "] " + title;
    var titleTextId = ErrID + "errorMessageBoxTitle " + title;
    var titleBarId = ErrID + "errorMessageBoxWindowTitle " + title;
    var messageId = ErrID + " " + title + " " + "errorMessageMsg"
    document.getElementById("errorMessageBox").id = windowId;
    document.getElementById("errorMessageBoxTitle").id = titleTextId
    document.getElementById(titleTextId).innerHTML = title;
    document.getElementById("errorMessageBoxWindowTitle").id = titleBarId;
    document.getElementById("errorMessageMsg").id = messageId;
    document.getElementById(messageId).innerHTML = message;
    dragElement(document.getElementById(windowId), document.getElementById(titleBarId));
    current = 0; target = document.getElementsByClassName("window").length;
    while (current != target) {
        dragElement(document.getElementsByClassName("window")[current], document.getElementsByClassName("windowTitle")[current]);
        current++;
    }
    openWindow(windowId);
}