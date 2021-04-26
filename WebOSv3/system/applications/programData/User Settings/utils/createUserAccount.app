<div class="window" id="Create User Account" style="width:unset;height:unset;min-width:unset;min-height:unset;resize:none;">
    <div class="windowTitle">
        <p>Create User Account</p>
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" style="padding:20px">
        <p>Enter a username for the new account:</p>
        <table>
            <tr>
                <td>Username: </td>
                <td><input id="createUserAccountInputField"></td>
            </tr>
            <tr>
                <td></td>
                <td align="right"><button onclick="createUserData(document.getElementById('createUserAccountInputField').value);">Create</button></td>
            </tr>
        </table>
    </div>
</div>