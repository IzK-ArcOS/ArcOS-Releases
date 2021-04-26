function getElemId(id, notify = 0) {
    if (notify == 1) { notifyStartService("WebOS.System.DOMLogic.getElemId: " + id); }
    var x = document.getElementById(id);
    return x;
}