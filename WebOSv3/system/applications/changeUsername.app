<div class="window" id="User Settings" onclick="bringToFront(this);" style="min-height:400px;max-height:unset;min-width:600px;max-width: unset;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>User Settings</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:30px;">
        <div style="position: fixed;left:0px;width:200px;padding:30px;padding-top:0px;">
            <h2 style="margin:0px;margin-bottom:10px;">Your info</h2>
            <img src="./system/images/user.png" height="100px" style="border-radius: 13px;" onclick="openWindow('Change Profile Picture');" id="userSettingsProfilePicture"><br>

        </div>
        <div style="position: fixed;left:140px;padding:30px;padding-left:0px;">
            <h1 style="vertical-align: middle;margin-bottom:5px;"><span id="usernameDisplay" style="vertical-align: bottom;"></span></h1>
            <p style="margin:0px;">Local Account</p>
            <p style="margin:0px;" id="userSettingsPasswordStatusDisplay"></p>
        </div>
        <div style="position:fixed;top:60px;right:30px;text-align: end;">
            <h3 style="margin:0px;margin-bottom:10px;">Change Information</h3>
            <button style="width:200px;margin-bottom:5px" onclick="openWindow('Change Profile Picture');">Change Profile Picture...</button><br>
            <button style="width:200px;margin-bottom:5px" onclick="openWindow('Change Username');">Change Username...</button><br>
            <button style="width:200px;margin-bottom:5px" onclick="openWindow('Change Password');">Change Password...</button>
            <Br>
            <h3 style="margin:0px;margin-bottom:5px;margin-top:5px;">Modify Other Accounts</h3>
            <button style="width:200px;margin-bottom:5px" onclick="openWindow('Delete User Account');">Delete User Account...</button><br>
            <button style="width:200px;margin-bottom:5px" onclick="openWindow('Create User Account');">Create User Account...</button><br>
            <button style="width:200px;margin-bottom:5px" onclick="openWindow('Toggle User Account');">Toggle User Account...</button><br>
        </div>

    </div>
</div>