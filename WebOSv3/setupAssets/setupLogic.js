var username;
var userSelectorActive = false;
var loginTimeout;
var page;
onload = function() {
    userSelector();
    document.addEventListener("keydown", e => {
        if (e.key.toLowerCase() == "enter") {
            enterKeyHit();
        }

        if (e.key.toLowerCase() == "escape") {
            if (page != 1) {
                cancelLogin();
            }

        }
    });
    startUserDataUpdateCycle();
}

function userSelector() {
    if (localStorage.getItem("userAmount") != "0") {
        userSelectorActive = true;
        switchPage(1);
        document.getElementById("content").classList.remove("content");
        document.getElementById("content").classList.add("userSelector");
        populateUserSelector();
    } else {
        switchPage(3);
        document.getElementById("content").classList.add("content");
        document.getElementById("content").classList.remove("userSelector");
    }


}

function switchPage(x) {
    page = x;
    document.getElementById("content").innerHTML = document.getElementById("page" + x).innerHTML;
}

function enterKeyHit() {
    switch (page) {
        case 2:
            continueLoginAs(document.getElementById('passwordInputField').value);
            break;
        case 3:
            createFirstUser();
            break;
        case 6:
            cancelLogin();
            break;
        case 7:
            loginAs(username);
            break;
    }
}

function loginAs(user) {
    username = user;
    if (localStorage.getItem("userList").split(",").includes(user)) {
        if (localStorage.getItem(username) != "0" || localStorage.getItem(username) != 0) {
            if (localStorage.getItem(user + "_pswd") != null) {
                switchPage(2);
                document.getElementById("content").className = "content";
                document.getElementById("username").innerHTML = user;
                if (localStorage.getItem(user + "_picture") == null) {
                    var userPicPath = "./system/images/user.png";
                } else {
                    var userPicPath = "./system/images/profilePictures/" + localStorage.getItem(user + "_picture") + ".png";
                }
                document.getElementById("profilePicture").src = userPicPath;

            } else {
                switchPage(6);
                document.getElementById("content").className = "content";
                document.getElementById("username").innerHTML = username;
                if (localStorage.getItem(username + "_picture") == null) {
                    var userPicPath = "./system/images/user.png";
                } else {
                    var userPicPath = "./system/images/profilePictures/" + localStorage.getItem(username + "_picture") + ".png";
                }
                document.getElementById("profilePicture").src = userPicPath;
                loginTimeout = setTimeout(() => {
                    localStorage.setItem("username", username);
                    window.location.href = "webos.html?username=" + username;
                }, 6000);
            }
        }
    }
}

function continueLoginAs(pswd) {
    var pass = localStorage.getItem(username + "_pswd");
    if (pass == pswd) {
        switchPage(6);
        document.getElementById("content").className = "content";
        document.getElementById("username").innerHTML = username;
        if (localStorage.getItem(username + "_picture") == null) {
            var userPicPath = "./system/images/user.png";
        } else {
            var userPicPath = "./system/images/profilePictures/" + localStorage.getItem(username + "_picture") + ".png";
        }
        document.getElementById("profilePicture").src = userPicPath;
        loginTimeout = setTimeout(() => {
            localStorage.setItem("username", username);
            window.location.href = "webos.html?username=" + username;
        }, 6000);
    } else {
        switchPage(7);
    }
}

function populateUserSelector() {
    try {
        document.getElementById("userSelectorInner").innerHTML = "";
        var users = localStorage.getItem("userList").split(",");
        for (var i = 0; i < users.length; i++) {
            if (localStorage.getItem(users[i]) != 0 || localStorage.getItem(users[i]) != "0") {
                if (localStorage.getItem(users[i] + "_picture") == null) {
                    var userPicPath = "./system/images/user.png";
                } else {
                    var userPicPath = "./system/images/profilePictures/" + localStorage.getItem(users[i] + "_picture") + ".png";
                }
                document.getElementById("userSelectorInner").innerHTML += "<button class=\"user\" onclick=\"loginAs('" + users[i] + "');\"><img src=\"" + userPicPath + "\"><br>" + users[i] + "</button>"
            }
        }
    } catch {}

}

function cancelLogin() {
    clearTimeout(loginTimeout);
    userSelector();
}

function createFirstUser() {
    var username = document.getElementById("firstUsernameInputField").value;
    createUserData(username);
    setTimeout(() => {
        userSelector();
        populateUserSelector();
        setTimeout(() => {
            window.location.reload();
        }, 100);

    }, 100);
}