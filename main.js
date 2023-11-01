// const  {update} = require('update-electron-app')()
const { app, BrowserWindow } = require("electron");
// const { app, Tray, Menu, nativeImage, BrowserWindow } = require("electron");
const { updateElectronApp } = require("update-electron-app");
updateElectronApp({
  updateSource: {
    type: UpdateSourceType.ElectronPublicUpdateService,
    repo: "lhourquin/app-weather-desktop",
  },
  updateInterval: "1 hour",
  logger: require("electron-log"),
});

let tray;
let browserWindow;

console.log("hi");

const args = process.argv.slice(1),
  serve = args.some((val) => val === "--serve");

const googleApiKey = (process.env.GOOGLE_API_KEY =
  "AIzaSyA54U2L1NuKc34IU4aZDOu6VuueBvVv7tc");
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
      contextIsolation: false,
    },
  });
  win.loadFile("dist/app-weather/index.html");
  //   browserWindow = new BrowserWindow({
  //     webPreferences: {
  //       nodeIntegration: true,
  //       allowRunningInsecureContent: true,
  //       contextIsolation: false,
  //     },});

  //   try {
  //     if (serve) {
  //       console.log("using internal serve");
  //       const path = __dirname + "/src/index.html";
  //       console.log(path);
  //       browserWindow.loadFile(path);
  //     } else {
  //       console.log("using ng serve");
  //       const debug = require("electron-debug");

  //       require("electron-reloader")(module);
  //       const path = "http://localhost:4200";
  //       console.log(path);
  //       browserWindow.loadURL(path);

  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
}

app.whenReady().then(() => {
  createWindow();
});
