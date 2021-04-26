startModule("WebOS.System.personalizationLogic");

function applyTheme() {
    localStorage.setItem(args.get("username") + "_theme", getElemId("themeSelect").value);
    var theme = getElemId("themeSelect").value;
    if (theme === "darkrounded") {
        getElemId("addonShellLoader").href = "";
    } else if (theme === "darksharp") {
        getElemId("addonShellLoader").href = "./system/css/darkModeSharp.css"
    } else if (theme === "lightrounded") {
        getElemId("addonShellLoader").href = "./system/css/lightModeRounded.css"
    } else if (theme === "lightsharp") {
        getElemId("addonShellLoader").href = "./system/css/lightModeSharp.css"
    }
}

function applyTaskbarPos() {
    localStorage.setItem(args.get("username") + "_taskbarpos", getElemId("taskbarPosSelect").value);
    var pos = getElemId("taskbarPosSelect").value;
    if (pos === "top") {
        getElemId("taskbarAddonLoader").href = "./system/css/taskbarOnTop.css";
    } else if (pos === "bottom") {
        getElemId("taskbarAddonLoader").href = "";
    }
}

function setAnimations() {
    var checked = getElemId("preferencesAnimationsSwitch").checked;
    if (checked == true) {
        localStorage.setItem(args.get("username") + "_enableAnimations", true);
        getElemId("animationsAddonLoader").href = "";
    } else {
        localStorage.setItem(args.get("username") + "_enableAnimations", false);
        getElemId("animationsAddonLoader").href = "system/css/noAnimations.css";
    }
}

function setTitlebarButtonLocations() {
    var checked = getElemId("preferencesTitlebarButtonsSwitch").checked;
    if (checked == true) {
        localStorage.setItem(args.get("username") + "_titlebarButtonsLeft", true);
        getElemId("titlebarAddonLoader").href = "system/css/titleBarButtonsLeft.css";
    } else {
        localStorage.setItem(args.get("username") + "_titlebarButtonsLeft", false);
        getElemId("titlebarAddonLoader").href = "";
    }
}