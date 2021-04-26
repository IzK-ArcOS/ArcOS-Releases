startModule("WebOS.System.varDefinitions");
//Define global variables used by the rest of WebOS.System//
var args = new URLSearchParams(window.location.search),
    screenWidth = screen.width,
    screenHeight = screen.height,
    activeapps = [],
    isMaximized = [],
    applications = [],
    appString = "",
    focusedWindow = "",
    newUsername = "",
    toolbarTimeout = "",
    toolbarTriggerTimeout = "",
    username = args.get("username"),
    maxamount = 0,
    enableToolbar = true,
    tmo,
    startMenuElements = [
        getElemId('startMenu'),
        getElemId('startButton'),
        getElemId('startMenuRightPane'),
        getElemId('startMenuLeftPane'),
    ],
    noResize = [
        'Execute Command',
        'Welcome!',
        "Error Message",
        "Wallpaper Settings",
        "Calculator",
        "Change Password"
    ],
    excludeTitlebarChange = [
        'Shut Down WebOS'
    ];