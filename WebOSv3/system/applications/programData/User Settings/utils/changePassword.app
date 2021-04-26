<div class="window" id="Change Password" onclick="bringToFront(this);" style="min-height: unset;resize:none;">
    <div class="windowTitle" onclick="bringToFront(parentNode);">
        Change Password
        <button onclick="closewindow(this.parentNode.parentNode);" class="title close">✖</button>
        <button onclick="minimizeWindow(this.parentNode.parentNode.id);" class="title">🗕</button>
    </div>
    <div class="body" style="padding:20px;">
        Fill out this field to change your password:<BR>
        <table>
            <tr>
                <td>
                    Current Password:
                </td>
                <td><input type="password" id="changePasswordCurrentPasswordInputField"></td>
            </tr>
            <tr>
                <td>
                    New Password:
                </td>
                <td><input type="password" id="changePasswordNewPasswordInputField"></td>
            </tr>
            <tr>
                <td>
                    Confirm New Password:
                </td>
                <td><input type="password" id="changePasswordConfirmPasswordInputField"></td>
            </tr>
            <tr>
                <td></td>
                <td align="right">
                    <button onclick="changePassword(
                        args.get('username'),
                        getElemId('changePasswordCurrentPasswordInputField').value,
                        getElemId('changePasswordNewPasswordInputField').value,
                        getElemId('changePasswordConfirmPasswordInputField').value
                        )">Change
                    </button>
                </td>
            </tr>
        </table>
    </div>
</div>