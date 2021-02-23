<div class="window" id="Preferences" onclick="bringToFront(this);"
    style="min-height:270px;max-height:270px;min-width:426px;max-width: 426px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>Preferences</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:10px;">
        <br>
        <p><b>Theme</b></p><hr>
        <p style="margin:0px;">Select your WebOS theme: </p>
        <select id="themeSelect" style="padding-top:10px;padding-bottom:10px;width:300px">
            <option value="darkrounded">Dark Mode Rounded Corners</option>
            <option value="darksharp">Dark Mode Sharp Corners</option>
            <option value="lightrounded" selected="lightrounded">Light Mode Rounded Corners</option>
            <option value="lightsharp" selected="lightsharp">Light Mode Sharp Corners</option>
        </select><button style="margin-top:10px;padding:10px;margin-left:5px;" onclick="applyTheme();">apply</button>
        <br>
        <br><p><b>Taskbar</b></p><hr>
        <p style="margin:0px;">Select your taskbar position:</p>
        <select id="taskbarPosSelect" style="padding-top:10px;padding-bottom:10px;width:300px">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
        </select><button style="margin-top:10px;padding:10px;margin-left:5px;" onclick="applyTaskbarPos();">apply</button>
    </div>
</div>