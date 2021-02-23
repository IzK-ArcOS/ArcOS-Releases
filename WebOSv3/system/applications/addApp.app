<div class="window" id="Add Application" onclick="bringToFront(this);"
    style="min-height:150px;max-height:150px;min-width:410px;max-width: 410px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>Add Application</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:10px;">
        <p style="margin:0px;">Enter relative path to app:</p>
        <input style="padding-top:10px;padding-bottom:10px;width:300px" id="addAppInputField"><button
            style="margin-top:10px;padding:10px;margin-left:5px;"
            onclick="addNewApp();setTimeout(() => {openWindow(this.parentNode.parentNode.parentNode);},500);">Add</button>
        <input id="startAppAfterAddCheckBox" type="checkbox"
            style="min-width: unset;margin-top: 10px;margin-bottom: 10px;">
        <label for="c1" style="margin-top: 10px;margin-bottom: 10px;">Start app when added</label><br>
    </div>
</div>