<div class="window" id="Change Username" onclick="bringToFront(this);" style="min-height: unset;resize:none;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        Change Username
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" style="padding:20px;">
        Enter a new name for your account:
        <BR>
        <table>
            <tr>
                <td>
                    New Username:
                </td>
                <td><input id="changeUsernameInputField"></td>
            </tr>
            <tr>
                <td></td>
                <td align="right">
                    <button onclick="changeUserDataName(username,document.getElementById('changeUsernameInputField').value);">Change
                    </button>
                </td>
            </tr>
        </table>
    </div>
</div>