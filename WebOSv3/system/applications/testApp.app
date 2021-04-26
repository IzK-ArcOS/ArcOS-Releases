<div class="window" id="Test App" onclick="bringToFront(this);"
    style="min-height:270px;max-height:270px;min-width:426px;max-width: 426px;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>Test App</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);" style="padding:10px;">
        <p>This app is for testing of application importing and controls.</p>
    </div>
</div>