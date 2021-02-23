console.warn("STATUS: Initiated module: WebOS.System.varDefinitions");
const args = new URLSearchParams(window.location.search);
username = args.get("username") || "Administrator";
activeapps = [];
maxamount = 0;
const applications = [];
const appString = "";