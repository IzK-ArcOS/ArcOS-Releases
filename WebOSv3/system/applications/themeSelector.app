<div class="window" id="Preferences" onclick="bringToFront(this);"
    style="resize:none;height:unset;min-width:426px;max-width: 426px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>Preferences</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:10px;">
        <center><h1>Preferences</h1></center>
        <p style="margin:0px;margin-bottom:5px;">Select your WebOS theme: </p>
        <select id="themeSelect" style="padding-top:10px;padding-bottom:10px;width:100%;margin-bottom:10px;">
            <option value="darkrounded">Dark Mode Rounded Corners</option>
            <option value="darksharp">Dark Mode Sharp Corners</option>
            <option value="lightrounded">Light Mode Rounded Corners</option>
            <option value="lightsharp">Light Mode Sharp Corners</option>
        </select><button style="padding:10px;width:100%" onclick="applyTheme();">apply</button><Br><Br>
        <p style="margin:0px;margin-bottom:5px;">Taskbar position:</p>
        <select id="taskbarPosSelect" style="padding-top:10px;padding-bottom:10px;margin-bottom:10px;width:100%">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
        </select><Br><button style="padding:10px;width:100%"
            onclick="applyTaskbarPos();">apply</button>
        <br>
        <br><label for="themeChangesBackgroundSwitch">Theme can change wallpaper: </label><input type="checkbox" class="switch"
            style="min-width:unset;float:right;" id="themeChangesBackgroundSwitch">
        <br><br>
        <label for="preferencesAnimationsSwitch">Enable animations: </label>
        <input type="checkbox" class="switch" id="preferencesAnimationsSwitch" checked="yes" style="min-width: unset;float:right;"
            onclick="setAnimations();">
        <Br><br>
        <label for="preferencesTitlebarButtonsSwitch">Titlebar buttons on the left side: </label>
        <input type="checkbox" class="switch" id="preferencesTitlebarButtonsSwitch" checked="yes" style="min-width: unset;float:right;"
            onclick="setTitlebarButtonLocations();"><br><br>
    </div>
</div>