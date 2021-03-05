import { app, BrowserWindow } from "electron"

function createWindow() {

    const win = new BrowserWindow({
        frame: false,
        fullscreen: true,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile("index.html")

    win.webContents.setFrameRate(60)
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit()
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length == 0){
        createWindow()
    }
})