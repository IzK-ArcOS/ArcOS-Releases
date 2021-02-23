console.warn("STATUS: Initiated module: WebOS.System.setupLogic (login)")
var currentPage = 1;
onload = function () {
    document.getElementById('main').innerHTML = document.getElementById('page' + currentPage).innerHTML;
    const args = new URLSearchParams(window.location.search);
    if (args.get("autoLogin") === '1') {
        document.getElementById("userInput").value = args.get("username");
        nextPage();

    }
    document.getElementById("userInput").value = args.get("username");
    if (localStorage.getItem("username") !== "") {
        document.getElementById("userInput").value = localStorage.getItem("username");
        if (localStorage.getItem("autologin") == 1) {
            nextPage();
        }
    } else {
        localStorage.setItem("username", username)
    }
}
function nextPage() {
    document.getElementById("shutDownButton").style.visibility = "hidden";
    document.getElementById("shutDownButton").style.opacity = "0";
    document.getElementsByTagName("html")[0].style.cursor = "none";
    username = document.getElementById("userInput").value || "Administrator";
    console.log("STATUS: Registering new user as " + username);
    document.getElementById('main').innerHTML = document.getElementById('page' + (currentPage + 1)).innerHTML;
    document.getElementById('username').innerHTML = username;
    setTimeout(() => {
        console.log("STATUS: User registration done, starting WebOS.System.Desktop.")
        localStorage.setItem("username", username);
        window.location.href = "webos.html?username=" + username;
    }, 5000);
}

window.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        console.log("STATUS: Function triggered: WebOS.System.Keyboard.Keypress.Enter: Starting WebOS.System.setupLogic.nextPage");
        nextPage();
    }
})

function shutdown() {
    if (document.getElementById("userInput").value === "COB=1") {
        localStorage.setItem("crashOnBoot",1)
    }
    window.location.href = 'shutdown.html';
}