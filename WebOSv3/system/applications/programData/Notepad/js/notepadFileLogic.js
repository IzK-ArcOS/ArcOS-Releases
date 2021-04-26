var notepadLoadedFile = "";

function notepadSaveFile() {
    if (notepadLoadedFile == "") {
        openWindow("Save Notepad");
        if (activeapps.includes("Save Notepad")) {
            document.getElementById("notepadSaveFileInput").addEventListener("keyup", () => {
                document.getElementById("notepadSaveFilePathDisplay").innerHTML = document.getElementById("notepadSaveFileInput").value;
            })
            setTimeout(() => {
                bringToFront(document.getElementById("Save Notepad"))
            }, 100);
        }
    } else {
        const fs = require('fs');
        fs.writeFile(notepadLoadedFile, getElemId("notepadTextField").value, function (err) {
            if (err) {
                notificationService("There was an error writing \"" + getElemId("notepadLoadFileInput") + "\". You might not have permission. Please verify the name and try again.");
            }
            console.log("The file was saved!");
        });
    }
}

function notepadLoadFile() {
    openWindow("Load Notepad");
    if (activeapps.includes("Load Notepad")) {
        document.getElementById("notepadLoadFileInput").addEventListener("keyup", () => {
            document.getElementById("notepadLoadFilePathDisplay").innerHTML = document.getElementById("notepadLoadFileInput").value;
        })
        setTimeout(() => {
            bringToFront(document.getElementById("Load Notepad"))
        }, 100);
    }
}

function loadNotepad() {
    setTimeout(() => {
        var path = __dirname + "\\system\\applications\\programdata\\notepad\\save\\" + getElemId("notepadLoadFileInput").value;
        notepadLoadedFile = path;
        var fs = require('fs');
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                notificationService("WebOS Notepad", "There was an error loading \"" + getElemId("notepadLoadFileInput").value + "\". The file might not exist or you don't have the permission to access it. Please verify the name and try again.");
                document.getElementById("notepadTextField").value = "";
            } else {

                notifyStartService("WebOS.System.programData.notepad.notepadFileLogic.loadNotepad: " + getElemId("notepadLoadFileInput").value)
                for (var i = 0; i < 200; i++) {

                    document.getElementById("notepadTextField").value = data;
                }

                setTimeout(() => {
                    closewindow(document.getElementById("Load Notepad"))
                }, 100);
            }
        });
    }, 100);
}

function saveNotepad() {
    var path = __dirname + "\\system\\applications\\programdata\\notepad\\save\\" + getElemId("notepadSaveFileInput").value;
    notepadLoadedFile = path;

    var fs = require("fs");
    fs.writeFile(path, getElemId("notepadTextField").value, function (err) {
        if (err) {
            notificationService("WebOS Notepad", "There was an error writing \"" + getElemId("notepadLoadFileInput").value + "\". You might not have permission. Please verify the name and try again.");
        } else {
            setTimeout(() => {
                closewindow(document.getElementById("Save Notepad"));
            }, 100);
        }
    });

}

function notepadNewFile() {
    notepadLoadedFile = "";
    document.getElementById("notepadTextField").value = "";
}

function deleteNotepad() {
    var path = __dirname + "\\system\\applications\\programdata\\notepad\\save\\" + getElemId("notepadDeleteFileInput").value;
    var fs = require("fs");
    fs.unlink(path, function (err) {
        if (err) {
            notificationService("WebOS Notepad", "There was an error deleting \"" + getElemId("notepadDeleteFileInput").value + "\". You might not have permission. Please verify the name and try again.");
        }
    })
    notepadNewFile();
    closewindow("Delete Notepad");
}
function notepadDeleteFile() {
    openWindow("Delete Notepad");
    if (activeapps.includes("Delete Notepad")) {
        document.getElementById("notepadDeleteFileInput").addEventListener("keyup", () => {
            document.getElementById("notepadDeleteFilePathDisplay").innerHTML = document.getElementById("notepadDeleteFileInput").value;
        })
        setTimeout(() => {
            bringToFront(document.getElementById("Delete Notepad"));
        }, 100);
    }
}
