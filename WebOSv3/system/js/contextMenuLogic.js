console.warn("STATUS: Initiated module: WebOS.System.contextMenuLogic");
document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu").style.display = 'block';
    document.getElementById("contextMenu").style.opacity = "0";
    document.getElementById("contextMenu").style.visibility = "hidden";
    if (localStorage.getItem("showDesktopIcons") !== "") {
        var show = localStorage.getItem("showDesktopIcons");
        if (show == '1') {
            document.getElementById("showDesktopIconsSwitch").setAttribute('checked', 'true');
            document.getElementById("desktopIcons").style.visibility = 'visible';
        } else {

            document.getElementById("desktopIcons").style.visibility = 'hidden';
        }
    } else {
        document.getElementById("showDesktopIconsSwitch").setAttribute('checked', 'true');
        document.getElementById("desktopIcons").style.visibility = 'visible';
    }
}
function rightClick(e) {
    if (localStorage.getItem("showDesktopIcons") !== "") {
        var show = localStorage.getItem("showDesktopIcons");
        if (show == '1') {
            document.getElementById("showDesktopIconsSwitch").setAttribute('checked', 'true');
            document.getElementById("desktopIcons").style.visibility = 'visible';
        } else {

            document.getElementById("desktopIcons").style.visibility = 'hidden';
        }
    } else {
        document.getElementById("showDesktopIconsSwitch").setAttribute('checked', 'true');
        document.getElementById("desktopIcons").style.visibility = 'visible';
    }
    document.getElementById("contextMenu").style.display = 'block';
    e.preventDefault();

    if (document.getElementById("contextMenu").style.opacity == "1")
        hideMenu();
    else {
        document.getElementById("contextMenu").style.opacity = '1';
        document.getElementById("contextMenu").style.visibility = "visible";
        document.getElementById("contextMenu").style.display = 'block';
        document.getElementById("contextMenu").style.left = e.pageX + "px";
        document.getElementById("contextMenu").style.top = e.pageY + "px";
    }
} 