<div class="window" id="Control Panel" onclick="bringToFront(this);" style="min-height:430px;max-height:430px;min-width:482px;max-width: 482px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>Control Panel</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding-left:0px;"><br>
        <center>
            <h2>WebOS Settings</h2>
            <p>Select an applet to continue.</p>

            <button onclick="startChangeUsername();" style="width:132px;height:113px;">
            <img src="./system/images/user.svg" height="75px"/><br>
            User Settings
        </button>
            <button onclick="openWindow('Preferences');//minimizeWindow('Control Panel');" style="width:132px;height:113px;">
            <img src="./system/images/themeSelectorIcon.svg" height="75px"/><br>
            Preferences
        </button>
            <button onclick="openWindow('Add Application');//minimizeWindow('Control Panel');" style="width:132px;height:113px;">
            <img src="./system/images/addappicon.svg" height="75px"/><br>
            Load custom app
        </button><br><br>
            <button onclick="openWindow('System Settings');//minimizeWindow('Control Panel');" style="width:132px;height:113px;">
            <img src="./system/images/systemSettings.svg" height="75px"/><br>
            System Settings
        </button>
            <button style="width:132px;height:113px;">
            <img src="./system/images/unknownFile.svg" height="75px"/><br>
            <br>
        </button>
            <button style="width:132px;height:113px;">
            <img src="./system/images/unknownFile.svg" height="75px"/><br>
            <Br>
        </button><br>
        </center>
    </div>
</div>