<div class="window" id="WebOS Notepad" onclick="bringToFront(this);"
    style="resize:none;width:fit-content;height:fit-content;min-width:unset;min-height:unset;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>WebOS Notepad</p>
        <button onclick="closewindow(this.parentNode.parentNode);notepadNewFile();" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:0px;">
        <div class="menuBar">
            <button onclick="notepadSaveFile();">Save</button>
            <button onclick="notepadLoadFile();">Load</button>
            <button onclick="notepadDeleteFile();">Delete</button>
            <button class="right" onclick="notepadNewFile();">New</button>
        </div>
        <textarea id="notepadTextField" rows="15" cols="35" style="resize:none;"></textarea>
    </div>
</div>