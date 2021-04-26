console.log("%cWebOSv3", "color:dodgerblue;font-size:36px;")
console.log("%cWelcome to the WebOSv3 console! Be careful, if you modify the wrong things you can (temporarily) break the OS.", "font-size:16px")

startModule("System.consoleNotifier");
function notifyStartService(name, forControl = "") {
    if (forControl == "") { console.log("%cSTATUS: Started " + name, "color:#00ff00"); }
    else { console.log("%cSTATUS: Started " + name + " for " + forControl, "color:#ffff00"); }
}

function notifyLoadApp(app, mod = "System.windowLogic.loadWindow") {
    console.log("%cSTATUS: Started " + mod + ": Loading .app file from " + app, "color: #00ffff");
}

function notifyStopService(name) { console.info("%cSTATUS: Stopped " + name + "...", "color:#00ff00"); }

function notifyLoadModule(mod, from = "System.windowLogic.loadWindow") {
    console.log("STATUS: " + from + ": Loading module from \"" + mod + "\"");
}

function startModule(mod) { console.warn("STATUS: Initiated module: " + mod); }