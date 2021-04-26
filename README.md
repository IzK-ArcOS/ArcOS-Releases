# WebOSv3 r8
The dummy operating system built in HTML, javascript, and Electron.

Yes, I know that it isn't a real operating system, but it isn't ment to be that anyway.

It is just ment to be a dummy operating system to have fun in and play with.

Allow me to explain. This program is for the nerds out there that were wondering if someone made an operating system for a browser. Infact, [Windows 93](https://www.windows93.net) did just that, a parody to Windows 98 in your browser.

Anyway, here is how to use it:
## USAGE

WebOS is relatively easy to use, even though there are some things of note. First of all: DO ANYTHING WITH THE CODE WHAT YOU WANT, I'M JUST DOING THIS FOR FUN.

Okay. Now that that's out of the way, let's get to explaining. So, WebOS keeps user data inside of the `localStorage` in chromium. A modification had to be made so that electron wouldn't delete the data after closing:

```javascript
////How the closing of a standard electron window is handeled:
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

////How the closing of the WebOS window is handeled:
app.on('exit', () => { //// 'window-all-closed' is now 'exit' ////
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
````

Thanks to github user @[johannesjo](https://github.com/johannesjo) at [this](https://github.com/electron/electron/issues/5708#issuecomment-531492039) electron github issue for supplying the information I was looking for. The last comment of an otherwise hopeless issue saved my day.

------
Upon first boot, you will see the login screen, asking for your name. The screen you're seeing is the `login.html` file in the root of WebOS.

If there are one or more users created, you will see a user selector.

The length of all username fields are 13 characters, exactly enough for Administrator.


About the blue screen: after the page has rendered (`bsod.html`), WebOS will be locked up and you cannot interact with it anymore, not even with the developer tools. That's because of this script:

```javascript
//NOTE: This code is temporarily commented in the actual bsod.html file for development//
onload = function () {
    document.getElementById("title").innerHTML = localStorage.getItem("BSODTitle");
    document.getElementById("message").innerHTML = localStorage.getItem("BSODMessage");
    localStorage.removeItem("BSODTitle");
    localStorage.removeItem("BSODMessage");
    setTimeout(() => {
        while (true) {
            a = Array(32767).join("\u00a0") + "b";  // A string with 30 consecutive \u00a0
            s = Date.now();
            t = a.replace(/^(\s|\u00A0)+$/g, '');
            x = Date.now() - s, a.length;
        }
    }, 1000);
}
```

in the `bsod.html` file. The bottom part after the localStorage is the most important part, because that part keeps chromium busy setting items in a list, so busy even that Developer Tools won't load any site elements, or process any code, and, you also can't hit `ALT`+`F4` to shut WebOS down, like (most) other windows in, well, Windows.

Once you have entered your name, you will land on the desktop with a welcome window. Once the `Close` button is clicked the `dispWelcome` flag will be set to `0`, which means that it cannot be opened again (at least not with the `openWindow("Welcome!");` command).

Once that is closed you can click on the start button to open programs, or change settings by going into the Control Panel. I've also included a very powerful application: `Execute Command`. This gives you direct access to javascript, using the `eval(String)` command in javascript. With this you can cause a BSOD, send an error message, display a notification, and much, much more. You can delete user-data from this prompt.

These are the settings that you can modify at the time of writing:

  * Taskbar position (top or bottom)
  * Theme (dark rounded, dark sharp, light rounded, light sharp)
  * Applications (load `.app` files with a relative or absolute path to the file)
  * Username
  * Profile Picture
  * Password
  * and the ability to reset the currently logged in user.

I also want to make a system that allows the user to configure WebOS to automatically import applications specified upon login, but that still needs to be implemented (at least on February 23rd, 2020).

If you want to contribute, go ahead, send me a message.


## NOTE AS OF APRIL 26TH, 2021

Some of the things mentioned above are no longer up to date. After a quick reading I modified some of it but some changes have escaped me. It has been 2 months since the last update, after all.

Also a little something about the passwords for user accounts: Please don't take security seriously, as it isn't the safest thing in the world.

Thanks to @[virivongithub](https://github.com/virivongithub) for helping me with the new login screen design. It has come a far way since the initial release of WebOSv3 (3.0.1, not even a revision like the current one from april 26th 2021: r8).

Have fun with WebOSv3,

TechWorldInc.
