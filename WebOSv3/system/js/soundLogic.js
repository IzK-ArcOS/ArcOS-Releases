startModule("WebOS.System.soundLogic");

function playSystemSound(sound) {
    if (localStorage.getItem("safeMode") != 1) {
        if (localStorage.getItem(args.get("username") + "_muted") == 0) {
            var audio = new Audio(sound);
            audio.play();
        }
    }
}

function changeVolumeState() {
    var checked = getElemId("volumeControlEnableSoundSwitch").checked;
    if (checked == true) {
        localStorage.setItem(args.get("username") + "_muted", 1)
    } else {
        localStorage.setItem(args.get("username") + "_muted", 0);
    }
}