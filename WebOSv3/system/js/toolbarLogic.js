try { startModule("WebOS.System.toolbarLogic"); } catch (e) { };

function setToolbarTrigger() {
    getElemId("toolbarHoverTrigger").addEventListener("mouseover", () => {
        if (enableToolbar == true) {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTriggerTimeout = setTimeout(() => {
                getElemId("toolbar").classList.remove("retracted")
            }, 1000);
            getElemId("toolbar").classList.remove("retracted");
        } else {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTimeout = setTimeout(() => {
                getElemId("toolbar").classList.add("retracted")
            }, 1000);
        }
    })

    getElemId("toolbar").addEventListener("mouseover", () => {
        if (enableToolbar == true) {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTimeout = setTimeout(() => {
                getElemId("toolbar").classList.remove("retracted")
            }, 1000);
        } else {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTimeout = setTimeout(() => {
                getElemId("toolbar").classList.add("retracted")
            }, 1000);
        }
    })

    getElemId("toolbar").addEventListener("mouseleave", () => {
        if (enableToolbar == true) {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTimeout = setTimeout(() => {
                getElemId("toolbar").classList.add("retracted")
            }, 1000);
        } else {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTimeout = setTimeout(() => {
                getElemId("toolbar").classList.add("retracted")
            }, 1000);
        }
    })

    getElemId("toolbarHoverTrigger").addEventListener("mouseleave", () => {
        if (enableToolbar == true) {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTriggerTimeout = setTimeout(() => {
                getElemId("toolbar").classList.add("retracted")
            }, 1000);
        } else {
            try { clearTimeout(toolbarTimeout) } catch { }
            try { clearTimeout(toolbarTriggerTimeout) } catch { }
            toolbarTimeout = setTimeout(() => {
                getElemId("toolbar").classList.add("retracted")
            }, 1000);
        }
    })
}

function toggleFullscreenMode() {
    const { BrowserWindow } = require("electron").remote;
    if (BrowserWindow.getFocusedWindow().fullScreen == true) {
        BrowserWindow.getFocusedWindow().fullScreen = false;
    } else {
        BrowserWindow.getFocusedWindow().fullScreen = true;
    }
}

function setToolbarMode() {
    var checked = getElemId("enableToolbarSwitch").checked;
    if (checked == true) {
        enableToolbar = true;
        localStorage.setItem(args.get("username") + "_enableToolbar", 1);
    } else {
        enableToolbar = false;
        localStorage.setItem(args.get("username") + "_enableToolbar", 0);
        try { clearTimeout(toolbarTimeout) } catch { }
        try { clearTimeout(toolbarTriggerTimeout) } catch { }
        toolbarTimeout = setTimeout(() => {
            getElemId("toolbar").classList.add("retracted")
        }, 1000);
    }
}