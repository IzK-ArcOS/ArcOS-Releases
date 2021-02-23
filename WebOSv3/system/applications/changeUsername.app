<div class="window" id="User Settings" onclick="bringToFront(this);"
    style="min-height:340px;max-height:340px;min-width:426px;max-width: 426px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>User Settings</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:10px;">
        <p><b>Change username</b></p>
        <hr>
        <p style="margin:0px;">Current username: <span id="changeUsernameOldUsername"></span></p>
        <p style="margin:0px;">Enter a new username:</p>
        <input style="padding-top:10px;padding-bottom:10px;width:300px" maxlength="13"
            id="changeUsernameInputField"><button style="margin-top:10px;padding:10px;margin-left:5px;"
            onclick="changeUsername();">Change</button>

        <p><b>General</b></p>
        <hr>
        <input id="autoLoginCheckMark" type="checkbox" style="min-width: unset;margin-top: 10px;margin-bottom: 10px;"
            onclick="useAutoLogin();"><label for="autoLoginCheckMark" style="margin-top: 10px;margin-bottom: 10px;"
            onclick="useAutoLogin();">Automatically login with username</label>
        <br>
        <p><b style="color:red">RESET</b></p>
        <hr>
        <p>If you want to reset your personal preferences, click <b style="color:red">RESET.</b> (will restart WebOS)
        </p>
        <button onclick="resetSettings();window.location.href = 'restart.html?username=to reset'"
            style="margin-top:10px;padding:10px;margin-left:5px;"><b style="color:red">RESET.</b></button>
    </div>
</div>