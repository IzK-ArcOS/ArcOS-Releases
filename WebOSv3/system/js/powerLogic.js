startModule("WebOS.System.powerLogic");

function shutDown() {
    getElemId("bdy").style.opacity = "0";
    setTimeout(() => { window.location.href = 'shutdown.html?username=' + username; }, 1000);
}

function logoff() {
    window.location.href = 'logoff.html?username=' + username;
}