// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron")
const path = require("path")
require("./src/bin/www")

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.webContents.openDevTools()

  mainWindow.loadURL("http://localhost:3000")
  mainWindow.on("closed", function () {
    mainWindow = null
  })
}

app.on("ready", createWindow)

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y)
})

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow()
  }
})
