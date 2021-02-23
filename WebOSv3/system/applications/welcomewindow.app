<div class="window" id="Welcome!" onclick="bringToFront(this);">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        <p>Welcome!</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" onclick="bringToFront(parentNode);"><br>
        <center>
            <img src="system/images/systemIcon.webp" height="100px" />
            <h2>Welcome to WebOSv3</h2>

            <p style="margin:20px;">
                Thank you for taking the time to check out WebOS, the OS built in HTML<br>
                To start using WebOS, click on the start button on the taskbar, from which you can<Br>
                launch WebOS apps. Or click "Configure WebOS" to personalize your copy of WebOS.<br><br></p>
            <button
                onclick='localStorage.setItem("dispWelcome",0);closewindow(this.parentNode.parentNode.parentNode);'>Close</button><button
                style="padding:10px;margin-left:10px;" onclick="configureWebOS();">Configure WebOS</button>
        </center>
    </div>
</div>