startModule("WebOS.System.notificationLogic");

function notificationService(title, message, closeDelay) {
    clearTimeout(tmo);
    if (title != null && title != undefined) {
        if (message != null && message != undefined) {
            getElemId('notificationMessage').innerHTML = message;
            getElemId('notificationService').style.opacity = '0'
            getElemId('notificationService').style.visibility = 'visible';
            getElemId('notificationService').style.opacity = '1';
            getElemId('notificationTitle').innerHTML = title;
            playSystemSound("./system/sounds/notification.mp3");
        } else {
            sendError('Notification Error', "The notification message is invalid and the notification can't start.<br>Please check the command and try again.")
        }
    } else {
        sendError('Notification Error', "The notification title is invalid and the notification can't start.<br>Please check the command and try again.")
    }
    if (closeDelay != null && closeDelay != undefined) {
        tmo = setTimeout(() => {
            closeNotification();
        }, closeDelay);
    }
}

function closeNotification() {
    getElemId('notificationService').style.opacity = '0';
    setTimeout(() => {
        getElemId('notificationService').style.visibility = 'hidden';
        getElemId('notificationTitle').innerHTML = 'Notification Title';
        getElemId('notificationMessage').innerHTML = 'Notification Message';
    }, 200);
}