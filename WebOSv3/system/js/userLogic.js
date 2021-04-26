function createUserData(user) {
    try {
        if (!localStorage.getItem("userList").split(",").includes(user)) {
            if (user == "null" || user == "undefined" || user == null || user == undefined) {
                try { notificationService("User Accounts", "The specified name is invalid. Please change the name and try again.") } catch {}
            } else {
                localStorage.setItem(user, 1);
                localStorage.setItem(user + "_dispWelcome", "1");
                localStorage.setItem(user + "_enableAnimations", "true");
                localStorage.setItem(user + "_muted", "0");
                localStorage.setItem(user + "_showDesktopIcons", "1");
                localStorage.setItem(user + "_taskbarpos", "bottom");
                localStorage.setItem(user + "_theme", "darkrounded");
                localStorage.setItem(user + "_titlebarButtonsLeft", "false");
                if (localStorage.getItem("userAmount") != null) {
                    localStorage.setItem("userAmount", parseInt(localStorage.getItem("userAmount")) + 1);
                } else {
                    localStorage.setItem("userAmount", 1);
                }
            }
            //try { sendError("Create User Account", "The user account was created successfully."); } catch {}
        } else {
            sendError("Create User Account", "The user account you tried to create already exists. Please fill out a different name and try again.");
        }
    } catch (e) {
        if (user == "null" || user == "undefined" || user == null || user == undefined) {
            try { notificationService("User Accounts", "The specified name is invalid. Please change the name and try again.") } catch {}
        } else {
            localStorage.setItem(user, 1);
            localStorage.setItem(user + "_dispWelcome", "1");
            localStorage.setItem(user + "_enableAnimations", "true");
            localStorage.setItem(user + "_muted", "0");
            localStorage.setItem(user + "_showDesktopIcons", "1");
            localStorage.setItem(user + "_taskbarpos", "bottom");
            localStorage.setItem(user + "_theme", "darkrounded");
            localStorage.setItem(user + "_titlebarButtonsLeft", "false");
            if (localStorage.getItem("userAmount") != null) {
                localStorage.setItem("userAmount", parseInt(localStorage.getItem("userAmount")) + 1);
            } else {
                localStorage.setItem("userAmount", 1);
            }
        }
    }
}

function deleteUserData(user, notify = 1) {
    for (var x = 0; x < 5; x++) {
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).includes(user)) {
                console.log(localStorage.key(i))
                localStorage.removeItem(localStorage.key(i));
            }
        }
    }
    if (notify == 1) {
        try {
            notificationService("User Accounts", "Your user account has been deleted, and you will be logged off in 5 seconds...")
            setTimeout(() => {
                logoff();
            }, 5000);
        } catch {}
    }
}

function resetUserData(user) {
    localStorage.setItem(user, 1);
    localStorage.setItem(user + "_dispWelcome", "1");
    localStorage.setItem(user + "_enableAnimations", "true");
    localStorage.setItem(user + "_muted", "0");
    localStorage.setItem(user + "_showDesktopIcons", "1");
    localStorage.setItem(user + "_taskbarpos", "bottom");
    localStorage.setItem(user + "_theme", "darkrounded");
    localStorage.setItem(user + "_titlebarButtonsLeft", "false");
    try {
        notificationService("User Accounts", "Your account's user data has been reset, and you will be logged off in 5 seconds to apply the changes...")
        setTimeout(() => {
            logoff();
        }, 5000);
    } catch {}
}

function changeUserDataName(oldname, newname) {
    var accountValue = localStorage.getItem(oldname),
        dispWelcome = localStorage.getItem(oldname + "_dispWelcome"),
        enableAnimations = localStorage.getItem(oldname + "_enableAnimations"),
        muted = localStorage.getItem(oldname + "_muted"),
        showDesktopIcons = localStorage.getItem(oldname + "_showDesktopIcons"),
        taskbarpos = localStorage.getItem(oldname + "_taskbarpos"),
        theme = localStorage.getItem(oldname + "_theme"),
        titlebarButtonsLeft = localStorage.getItem(oldname + "_titlebarButtonsLeft"),
        picture = localStorage.getItem(oldname + "_picture"),
        pswd = localStorage.getItem(oldname + "_pswd");
    localStorage.removeItem(oldname, 1);
    localStorage.removeItem(oldname + "_dispWelcome");
    localStorage.removeItem(oldname + "_enableAnimations");
    localStorage.removeItem(oldname + "_muted");
    localStorage.removeItem(oldname + "_showDesktopIcons");
    localStorage.removeItem(oldname + "_taskbarpos");
    localStorage.removeItem(oldname + "_theme");
    localStorage.removeItem(oldname + "_titlebarButtonsLeft");
    localStorage.removeItem(oldname + "_pswd");
    localStorage.removeItem(oldname + "_picture");
    localStorage.setItem(newname, accountValue);
    localStorage.setItem(newname + "_dispWelcome", dispWelcome);
    localStorage.setItem(newname + "_enableAnimations", enableAnimations);
    localStorage.setItem(newname + "_muted", muted);
    localStorage.setItem(newname + "_showDesktopIcons", showDesktopIcons);
    localStorage.setItem(newname + "_taskbarpos", taskbarpos);
    localStorage.setItem(newname + "_theme", theme);
    localStorage.setItem(newname + "_titlebarButtonsLeft", titlebarButtonsLeft);
    localStorage.setItem(newname + "_picture", picture);
    if (pswd != null) {
        localStorage.setItem(newname + "_pswd", pswd);
    }

    try {
        closewindow(document.getElementById("startMenu"));
        closewindow(document.getElementById("taskbar"));
        closewindow(document.getElementById("desktopIcons"));
        for (var i = 0; i < document.getElementById("windowStore").childNodes.length; i++) {
            closewindow(document.getElementById("windowStore").childNodes[i]);
        }
        notificationService("User Accounts", "Your username has been updated, but you have to log in before the changes will take effect.<Br><br><button onclick=\"logoff()\">Logoff</button>")
    } catch {}

}

function toggleUserData(user) {
    if (localStorage.getItem(user) == 1) {
        if (localStorage.getItem("userAmount") <= 1 || localStorage.getItem("username") == user) {
            try { notificationService("User Accounts", "You cannot disable the user account that is logged on or that is the only user."); } catch {}
        } else {
            localStorage.setItem(user, 0);
            try { notificationService("User Accounts", "The user account \"" + user + "\" has been disabled."); } catch {}
        }
    } else {
        localStorage.setItem(user, 1);
        try { notificationService("User Accounts", "The user account \"" + user + "\" has been enabled."); } catch {}
    }
}

function setUserProfilePicture(user, x) {
    localStorage.setItem(user + "_picture", x);
}

function startUserDataUpdateCycle() {
    setInterval(() => {
        localStorage.setItem("userAmount", 0);
        localStorage.removeItem("userList");
        if (localStorage.getItem("userList") != null) {
            var tempUsrList = localStorage.getItem("userList").split(',');
        } else {
            var tempUsrList = [];
        }
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem((localStorage.key(i)) + "_theme") != null && localStorage.getItem((localStorage.key(i)) + "_taskbarpos") != null) {
                localStorage.setItem("userAmount", parseInt(localStorage.getItem("userAmount")) + 1);
                if (!tempUsrList.includes(localStorage.key(i))) {
                    tempUsrList.push(localStorage.key(i));
                }
                localStorage.setItem("userList", tempUsrList);
            } else {
                //alert("Invalid Account!")
            }
        }
    }, 500);
}