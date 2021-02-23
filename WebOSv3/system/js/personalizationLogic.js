console.warn("STATUS: Initiated module: WebOS.System.personalizationLogic");
function applyTheme() {
    localStorage.setItem("theme", document.getElementById("themeSelect").value);
    var theme = document.getElementById("themeSelect").value;
    if (theme === "darkrounded") {
        document.getElementById("addonShellLoader").href = "";
    } else if (theme === "darksharp") {
        document.getElementById("addonShellLoader").href = "./system/css/darkModeSharp.css"
    } else if (theme === "lightrounded") {
        document.getElementById("addonShellLoader").href = "./system/css/lightModeRounded.css"
    } else if (theme === "lightsharp") {
        document.getElementById("addonShellLoader").href = "./system/css/lightModeSharp.css"
    }
    //closewindow(document.getElementById("Theme Selector"));
}

function applyTaskbarPos() {
    localStorage.setItem("taskbarpos", document.getElementById("taskbarPosSelect").value);
    var pos = document.getElementById("taskbarPosSelect").value;
    if (pos === "top") {
        document.getElementById("taskbarAddonLoader").href = "./system/css/taskbarOnTop.css";
    } else if (pos === "bottom") {
        document.getElementById("taskbarAddonLoader").href = "";
    }
}