startModule("WebOS.System.contextMenuLogic");
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    try {
        //notifyStartService("WebOS.System.contextMenuLogic.hideMenu");
        getElemId("contextMenu").style.display = 'block';
        getElemId("contextMenu").style.opacity = "0";
        getElemId("contextMenu").style.visibility = "hidden";
        if (localStorage.getItem(args.get("username") + "_showDesktopIcons") !== "") {
            var show = localStorage.getItem(args.get("username") + "_showDesktopIcons");
            if (show == '1') {
                getElemId("showDesktopIconsSwitch").setAttribute('checked', 'true');
                getElemId("desktopIcons").style.visibility = 'visible';
            } else {
                getElemId("desktopIcons").style.visibility = 'hidden';
            }
        } else {
            getElemId("showDesktopIconsSwitch").setAttribute('checked', 'true');
            getElemId("desktopIcons").style.visibility = 'visible';
        }
    } catch { bsod("CONTEXT_MENU_INVALID", "The WebOS context menu module or one of the modules inheriting it couldn't be found.") }

}

function rightClick(e) {
    try {
        var obj = e.toElement.id;
        if (obj == "bdy" || obj == "desktopIcons") {
            if (localStorage.getItem(args.get("username") + "_showDesktopIcons") !== "") {
                var show = localStorage.getItem(args.get("username") + "_showDesktopIcons");
                if (show == '1') {
                    getElemId("showDesktopIconsSwitch").setAttribute('checked', 'true');
                    getElemId("desktopIcons").style.visibility = 'visible';
                } else {
                    getElemId("desktopIcons").style.visibility = 'hidden';
                }
            } else {
                getElemId("showDesktopIconsSwitch").setAttribute('checked', 'true');
                getElemId("desktopIcons").style.visibility = 'visible';
            }
            e.preventDefault();
            getElemId("contextMenu").style.display = 'block';
            getElemId("contextMenu").style.opacity = '1';
            getElemId("contextMenu").style.visibility = "visible";
            getElemId("contextMenu").style.display = 'block';
            getElemId("contextMenu").style.left = e.pageX + "px";
            getElemId("contextMenu").style.top = e.pageY + "px";
        } else {
            hideMenu();
        }
    } catch (e) { bsod("CONTEXT_MENU_INVALID", "The WebOS context menu module or one of the modules inheriting it couldn't be found.") }
}