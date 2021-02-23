console.warn("STATUS: Initiated module: WebOS.System.notificationLogic");
function notificationService(title, message, closeDelay) {
    document.getElementById('notificationService').style.opacity = '0'
    document.getElementById('notificationService').style.visibility = 'visible';
    document.getElementById('notificationService').style.opacity = '1';
    if (title != null && title != undefined) {
        document.getElementById('notificationTitle').innerHTML = title;
    } else {
        sendError('Notification Error', "The notification title is invalid and the notification can't start.<br>Please check the command and try again.")
    }
    if (message != null && message != undefined) {
        document.getElementById('notificationMessage').innerHTML = message;
    } else {
        sendError('Notification Error', "The notification message is invalid and the notification can't start.<br>Please check the command and try again.")
    }
    if (closeDelay != null && closeDelay != undefined) {
        setTimeout(() => {
            closeNotification();
        }, closeDelay);
    }
}

function closeNotification() {
    document.getElementById('notificationService').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('notificationService').style.visibility = 'hidden';
        document.getElementById('notificationTitle').innerHTML = 'Notification Title';
        document.getElementById('notificationMessage').innerHTML = 'Notification Message';
    }, 200);
}