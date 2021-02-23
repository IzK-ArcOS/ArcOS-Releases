
<style>
    .window[id*='Shut Down WebOS'] {
        min-width: 320px;
        max-width: 320px;
        min-height: 245px;
        max-height: 245px;
    }
    .window[id*='Shut Down WebOS']>.body>center>h3 {
        padding:0px;
        margin:10px;
    }

    .window[id*='Shut Down WebOS']>.windowTitle>center>h3 {
        padding:0px;
        margin:10px;
    }
    .window[id*='Shut Down WebOS']>.body {
        padding:0px;
    }

    .window[id*='Shut Down WebOS']>.windowTitle {
        padding:0px;
        
    }
    
    
</style>
<div class="window" id="Shut Down WebOS" onclick="bringToFront(this);">
    <div class="windowTitle" style="background-color: transparent;">
        <center><h3>Shutdown WebOS</h3></center><br>
    </div>
    <div class="body" onclick="bringToFront(parentNode);">
        <br>
        <center>
        <button onclick="shutDown();">
            <img src="./system/images/shutdown.svg" height="75px"/><br>
            Shut down
        </button>
        <button onclick="logoff();">
            <img src="./system/images/logoff.svg" height="75px"/><br>
            Logoff
        </button>
        <button onclick="window.location.href = 'restart.html?username=' + username">
            <img src="./system/images/restart.svg" height="75px"/><br>
            Restart
        </button><br><br>
        <button onclick="closewindow(this.parentNode.parentNode.parentNode);">
            Cancel
        </button>
        </center>
    </div>
</div>