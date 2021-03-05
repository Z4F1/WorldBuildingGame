"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function createWindow() {
    const win = new electron_1.BrowserWindow({
        frame: false,
        fullscreen: true,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile("index.html");
    win.webContents.setFrameRate(60);
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (electron_1.BrowserWindow.getAllWindows().length == 0) {
        createWindow();
    }
});
