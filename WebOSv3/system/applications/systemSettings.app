<div class="window" id="System Settings" onclick="bringToFront(this);" style="resize:none;height:unset;width:426px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>System Settings</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:10px;">
        <center>
            <h1>System Settings</h1>
        </center>
        <p style="margin:0px;margin-bottom:5px;"></p>
        <label for="enableToolbarSwitch">Enable toolbar: </label>
        <input type="checkbox" class="switch" id="enableToolbarSwitch" checked="yes"
            style="min-width: unset;float:right;" onclick="setToolbarMode();"><br><br>
        <label for="pinToolbarSwitch">Toolbar is pinned: </label>
        <input type="checkbox" class="switch" id="pinToolbarSwitch" checked="yes" style="min-width: unset;float:right;"
            onclick="setToolbarMode();">
        <Br><Br><b>Display</b><BR>
        <p>Viewport width: <span style="float:right" id="systemSettingsViewportWidth">1366</span></p>
        <p>Viewport height: <span style="float:right" id="systemSettingsViewportHeight">767</span></p>
    </div>
</div>