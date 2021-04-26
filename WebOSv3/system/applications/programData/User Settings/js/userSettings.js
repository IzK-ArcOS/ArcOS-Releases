function changePassword(user, oldpswd, newpswd, confirmnewpswd) {
    if (localStorage.getItem(user + "_pswd") != null) {
        if (localStorage.getItem(user + "_pswd") == oldpswd) {
            if (newpswd == confirmnewpswd) {
                if (newpswd == "") {
                    localStorage.removeItem(user + "_pswd");
                } else {
                    localStorage.setItem(user + "_pswd", newpswd);
                }
                sendError("Password Manager", "Your password has been updated.");
            } else {
                sendError("Password Manager", "The two new passwords don't match. Please retype each of them and try again.");
            }
        } else {
            sendError("Password Manager", "The old password is incorrect. Please retype the old password and try again.");
        }
    } else {
        if (newpswd == confirmnewpswd) {
            if (newpswd == "") {
                localStorage.removeItem(user + "_pswd");
            } else {
                localStorage.setItem(user + "_pswd", newpswd);
            }
            sendError("Password Manager", "Your password has been updated.");
        } else {
            sendError("Password Manager", "The two new passwords don't match. Please retype each of them and try again.");
        }
    }
}